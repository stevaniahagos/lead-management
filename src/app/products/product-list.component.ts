import { Component } from '@angular/core';

@Component({
  selector: 'lm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle = 'Products';
  managers = ['Stevania Hagos', 'Inigo Montoya'];
  listFilter = 'insurance';
  nameOfLead = '';
  nameOfManager = 'Select Manager';
  code = 'Select Product';
  leadIndex = 0;
  isUpdate = false;
  products: any[] = [
    {
      productName: 'Health Insurance',
      productCode: 0,
      leads: [
        {
          id: 0,
          leadName: 'Nessa Geron',
          managerName: 'Stevania Hagos',
        },
        {
          id: 1,
          leadName: 'Allison Nestor',
          managerName: 'Stevania Hagos'
        }
      ],
      rating: 3.8,
      showLeads: false
    },
    {
      productName: 'Car Insurance',
      productCode: 1,
      leads: [
        {
          id: 0,
          leadName: 'Spencer Nelson',
          managerName: 'Inigo Montoya'
        },
        {
          id: 1,
          leadName: 'Mark Torres',
          managerName: 'Stevania Hagos'
        }
      ],
      rating: 4.1,
      showLeads: false
    }
  ];

  toggleLeads(productCode: number): void{
    this.products[productCode].showLeads = !this.products[productCode].showLeads;
  }

  toggleIsUpdate(pCode: number, lIndex: number): void {
    this.isUpdate = !this.isUpdate;
    this.nameOfLead = this.products[pCode].leads[lIndex].leadName;
    this.nameOfManager = this.products[pCode].leads[lIndex].managerName;
    this.code = this.products[pCode].productCode;
    this.leadIndex = lIndex;
  }

  updateLeads(productCode: string, leadName: string, managerName: string): void {
    console.log(productCode + ' -- ' + leadName + ' -- ' + managerName);
    const code = Number(productCode);
    if (!this.isUpdate){
      if (this.products[code].leads.length < 1) {
        this.products[code].leads.push({
          id: 0,
          leadName: this.nameOfLead,
          managerName: this.nameOfManager
        });
      } else {
        this.products[code].leads.push({
          id: this.products[code].leads[this.products[code].leads.length - 1].id + 1,
          leadName: this.nameOfLead,
          managerName: this.nameOfManager
        });
      }
    } else{
      console.log('update');
      this.products[code].leads[this.leadIndex].leadName = this.nameOfLead;
      this.products[code].leads[this.leadIndex].managerName = this.nameOfManager;
      this.isUpdate = false;
    }
  }

  deleteLead(productCode: string, leadId: string): void {
    const code = Number(productCode);
    if (confirm('Are you sure you want to delete this lead?')) {
      for (let index = 0; index < this.products[code].leads.length; index++){
        if (this.products[code].leads[index].id === Number(leadId)) {
          this.products[code].leads.splice(index, 1);
        }
      }
    }
  }
}
