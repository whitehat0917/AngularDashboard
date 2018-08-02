import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent {
  @HostBinding('class.projects-table') private readonly projectsTable = true;

  private tableHeader: string[] = [
    'Project',
    'Responsible',
    'Client contact',
    'Deadline',
    'Progress',
  ];
  private data: object[] = [
    {
      project: 'Darkboard',
      responsible: [
        {
          color: 'mint',
          name: 'Alex',
        },
        {
          color: 'primary',
          name: 'Dina',
        },
        {
          color: 'cerulean',
          name: 'Misha',
        },
      ],
      email: 'Luke@skywalker.com',
      deadline: 'Jun 15',
      progress: 44,
      isSelected: false,
    },
    {
      project: 'Big financial app',
      responsible: [
        {
          color: 'baby-blue',
          name: 'Vlada',
        },
      ],
      email: 'Boss@financial.com',
      deadline: 'Mar 1',
      progress: 14,
      isSelected: true,
    },
    {
      project: 'New Year office decoration',
      responsible: [
        {
          color: 'primary',
          name: 'Dina',
        },
        {
          color: 'baby-blue',
          name: 'Vlada',
        },
      ],
      email: 'info@creativeit.io',
      deadline: 'Dec 25',
      progress: 100,
      isSelected: false,
    },
    {
      project: 'Don\'t worry, be happy!!!',
      responsible: [
        {
          color: 'secondary',
          name: 'Everybody',
        },
      ],
      email: 'Contact@happyness.com',
      deadline: 'Yesterday',
      progress: 31,
      isSelected: false,
    },
  ];
}
