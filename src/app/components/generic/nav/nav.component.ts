import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.sass']
})
export class NavComponent {
	@Input() items: {text: string, link: string}[] = [];
}
