import { LightningElement, track } from 'lwc';

export default class SimpleCalculatorDemo extends LightningElement {
    @track no1;
    @track no2;
    @track results;
    handleChange(event){
        const currentInputName = event.target.name;
        const currentValue = event.target.value;
        if(currentInputName == "number1")
            this.no1=currentValue;
        else
            this.no2=currentValue; 
    
    };
    
}