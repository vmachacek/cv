import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CV_DATA } from './cv-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.theme-dark]': 'isDark()',
    '[class.theme-light]': '!isDark()',
  },
})
export class App {
  protected readonly isDark = signal(App.loadTheme());
  protected readonly cv = CV_DATA;

  protected readonly skillCategories = Object.entries(CV_DATA.skills).map(([name, items]) => ({
    name,
    items,
  }));

  protected expTech(entry: string): string {
    return entry.split(' - ')[0];
  }

  protected expYears(entry: string): string {
    return entry.split(' - ')[1] ?? '';
  }

  protected toggleTheme(): void {
    this.isDark.update(v => {
      const next = !v;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }

  private static loadTheme(): boolean {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  protected print(): void {
    window.print();
  }
}
