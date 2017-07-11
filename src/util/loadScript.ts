export const iframe = document.createElement('iframe');

const onLoadIframe = new Promise((resolve) => {
    iframe.addEventListener('load', resolve);
});

document.body.appendChild(iframe);

export async function loadScript(src: string): Promise<Window> {
    await onLoadIframe;

    const { contentWindow } = iframe;
    const { document } = contentWindow;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const removeScript = () => {
        document.head.removeChild(script);
    };

    return new Promise<Window>((resolve, reject) => {
        script.onload = () => {
            resolve(contentWindow);
            removeScript();
        };
        script.onerror = () => {
            reject(new Error(`Script Loading Error: ${src}`));
            removeScript();
        };

        script.src = src;

        document.head.appendChild(script);
    });
}