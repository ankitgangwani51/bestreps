import { LightningElement, api } from 'lwc';

export default class IfElseCondition extends LightningElement {
    @api booleanVar = false;
    @api boolDisabled = false;
    handleDisable(event){
        this.boolDisabled = true;
    }
    handleClick(event){
        this.booleanVar = true;
    }
    handleHide(event){
        this.booleanVar = false;
    }
}