import { addListener, guid4 } from 'shared-base';
import { toast } from 'starwars-ui';
import { prompt } from 'prompt-system';
import { Json } from '../types';
import { forms } from '../_definitions';
import { randomImage } from '../data/data.images';

/*
This file is a simplified version of a "bus" system that listens 
for events and performs actions based on the event verb. 
It is a centralized place to handle side-effects 
In a real-world app, this would be a more complex system that would handle more complex side-effects
*/

type Verb = 'create' | 'update' | 'delete';

type Action = {
  verb: Verb;
  id?: string;
  params?: Json;
  crudMethod: CrudMethod;
};

type Method = (action: Action) => Promise<void>;
type CrudMethod = (id: string, value: Json) => void;

const map: Record<Verb, Method> = {
  create: createPerson,
  update: updatePerson,
  delete: deletePerson,
};

async function createPerson(action: Action) {
  const { crudMethod } = action;
  const { value, didCancel } = await prompt.form({
    title: 'New Person',
    formConfig: {
      ...forms.person,
      sideImageUrl: randomImage(),
    },
  });

  if (didCancel || !value) return;

  const id = guid4();

  const data = {
    ...value,
    id,
  };

  crudMethod(id, data);
  toast('Item created', { type: 'success' });
}

async function updatePerson(action: Action) {
  const { id, params, crudMethod } = action;
  const { item, change } = params || {};

  crudMethod(id!, change);
  toast(`${item?.name} updated`, { type: 'success' });
}

async function deletePerson(action: Action) {
  const { id, params, crudMethod } = action;
  const { item } = params || {};

  const { value, didCancel } = await prompt.confirm({
    title: 'Delete Item',
    message: `Are you sure you want to delete ${item?.name}?`,
    confirmText: 'Delete',
    confirmColor: 'error',
  });

  if (didCancel || !value) return;

  crudMethod(id!, item);
  toast(`${item?.name} deleted`, { type: 'success' });
}

function people(action: Action) {
  const { verb } = action;

  const method = map[verb];

  if (!method) {
    return;
  }

  method(action);
}

export function bus() {
  const unlisten = addListener('people', people);
  return unlisten;
}
