import { LightningElement } from 'lwc';

export default class SomeD extends LightningElement {
     
        products = [
            {
                Id: 1,
                Brand: 'BMW',
                Color: 'White',
                Price: 10000
            },
            {
                Id: 2,
                Brand: 'Kia',
                Color: 'Green',
                Price: 20000
            },
            {
                Id: 3,
                Brand: 'Opel',
                Color: 'Red',
                Price: 30000
            }
        ]
    }