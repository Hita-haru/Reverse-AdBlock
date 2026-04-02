const addiv = document.createElement('iframe');
const addiv2 = document.createElement('iframe');

// 3/10でバナー、3/10で四角、あと両方もつけとく
if (Math.random() < 0.33) {
    const banner_ad = Math.floor(Math.random() * 7) + 1;
    let banner_ad_url = chrome.runtime.getURL(`banner-ad/ad${banner_ad}.html`);
    addiv.className = 'fakead-banner-container';
    addiv.src = banner_ad_url;
    document.body.appendChild(addiv);
} else if (Math.random() < 0.33) {
    const rect_ad = Math.floor(Math.random() * 6) + 1;
    let rect_ad_url = chrome.runtime.getURL(`rectangle-ad/ad${rect_ad}.html`)
    addiv.className = 'fakead-rect-container';
    addiv.src = rect_ad_url;
    document.body.appendChild(addiv);
} else if (Math.random() < 0.33) { 
    const banner_ad = Math.floor(Math.random() * 7) + 1;
    const rect_ad = Math.floor(Math.random() * 6) + 1;
    addiv.className = 'fakead-banner-container';
    addiv2.className = 'fakead-rect-container';
    addiv.src = chrome.runtime.getURL(`banner-ad/ad${banner_ad}.html`);
    addiv2.src = chrome.runtime.getURL(`rectangle-ad/ad${rect_ad}.html`);
    document.body.appendChild(addiv);
    document.body.appendChild(addiv2);
} else if (Math.random() < 0.33) { //余ったaddiv2を使って２つ目のrectを出す
    const rect_ad = Math.floor(Math.random() * 6) + 1;
    const rect_ad2 = Math.floor(Math.random() * 6) + 1;
    addiv.className = 'fakead-rect-container';
    addiv2.className = 'fakead-rect2-container';
    addiv.src = chrome.runtime.getURL(`rectangle-ad/ad${rect_ad}.html`);
    addiv2.src = chrome.runtime.getURL(`rectangle-ad/ad${rect_ad2}.html`);
    document.body.appendChild(addiv);
    document.body.appendChild(addiv2);
} else {
    console.log("残念！広告は入りませんでした");
}