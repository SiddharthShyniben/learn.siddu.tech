import {Component} from '@angular/core';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.sass']
})
export class LandingComponent {
	navItems: {text: string, link: string}[] = [
		{
			text: 'Learn',
			link: 'learn'
		},
		{
			text: 'Sign up',
			link: 'signup'
		}
	];
}
