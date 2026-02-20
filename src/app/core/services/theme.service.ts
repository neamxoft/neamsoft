import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private darkMode = signal<boolean>(this.getInitialTheme());

    constructor() {
        console.log('ThemeService initialized with:', this.darkMode());
        effect(() => {
            const isDark = this.darkMode();
            console.log('Theme effect running. Dark Mode:', isDark);
            if (isDark) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    toggleTheme() {
        this.darkMode.update(v => !v);
    }

    isDarkMode() {
        return this.darkMode();
    }

    private getInitialTheme(): boolean {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
