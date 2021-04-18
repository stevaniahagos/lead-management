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
  products: any[] = [
    {
      productName: 'Health Insurance',
      productCode: 0,
      leads: [
        {
          leadName: 'Nessa Geron',
          managerName: 'Stevania Hagos',
        },
        {
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
          leadName: 'Spencer Nelson',
          managerName: 'Inigo Montoya'
        },
        {
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

  updateLeads(productCode: string, leadName: string, managerName: string): void {
    console.log(productCode + ' -- ' + leadName + ' -- ' + managerName);
  }
}
