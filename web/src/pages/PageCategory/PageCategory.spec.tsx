import { PageCategoryDriver } from './PageCategory.driver';
import Chance from 'chance';

const chance = new Chance();

describe('PageCategory', () => {
    let driver: PageCategoryDriver;

    beforeAll(() => {
        driver = new PageCategoryDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('PageCategory-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('PageCategory snapshots', () => {
    let driver: PageCategoryDriver;

    beforeAll(() => {
        driver = new PageCategoryDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
