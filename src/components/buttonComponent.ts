export function CreateButton(label: string, classparam: string): string {
    const button = `
    <button type="button" class="button ${classparam}>${label}</button>
    `;

    return button;
}
