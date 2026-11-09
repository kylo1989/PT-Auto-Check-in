// ==UserScript==
// @name         PT 站点全自动签到助手 (125站内置版)
// @namespace    https://github.com/kylo1989/PT-Auto-Check-in
// @version      1.2.8
// @description  基于稳定的1.2.4内核，保持其余站点不动，专门通过主页面上下文与原生接口彻底解决 HDArea 与 猪站(piggo.me) 万年历点击不生效问题。
// @author       kylo1989
// @homepageURL  https://github.com/kylo1989/PT-Auto-Check-in
// @supportURL   https://github.com/kylo1989/PT-Auto-Check-in/issues
// @updateURL    https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js
// @downloadURL  https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js
// @license      MIT
// @match        *://*.hdwing.org/*
// @match        *://*.playlet.cc/*
// @match        *://*.jptv.club/*
// @match        *://*.wintersakura.net/*
// @match        *://*.audiences.me/*
// @match        *://*.carpt.net/*
// @match        *://*.ccfbits.org/*
// @match        *://*.cinefiles.info/*
// @match        *://*.dicmusic.com/*
// @match        *://*.eastgame.org/*
// @match        *://*.et8.org/*
// @match        *://*.greatposterwall.com/*
// @match        *://*.haidan.video/*
// @match        *://*.haidan.cc/*
// @match        *://*.hdarea.club/*
// @match        *://*.hdatmos.club/*
// @match        *://*.hdcity.city/*
// @match        *://*.hddolby.com/*
// @match        *://*.hdfans.org/*
// @match        *://*.hdmayi.com/*
// @match        *://*.hdpt.xyz/*
// @match        *://*.hdtime.org/*
// @match        *://*.hdvideo.one/*
// @match        *://*.hhan.club/*
// @match        *://*.hhanclub.top/*
// @match        *://*.hhanclub.net/*
// @match        *://*.ianon.app/*
// @match        *://*.kufei.com/*
// @match        *://*.kufei.org/*
// @match        *://*.leaves.red/*
// @match        *://*.nicept.net/*
// @match        *://*.open.cd/*
// @match        *://*.piggo.me/*
// @match        *://*.ptchina.org/*
// @match        *://*.pthome.net/*
// @match        *://*.ptsbao.club/*
// @match        *://*.pttime.org/*
// @match        *://*.pttime.top/*
// @match        *://*.rousi.zip/*
// @match        *://*.totheglory.im/*
// @match        *://*.springsunday.net/*
// @match        *://*.pterclub.net/*
// @match        *://*.pterclub.com/*
// @match        *://*.ourbits.club/*
// @match        *://*.npupt.com/*
// @match        *://*.sharkpt.net/*
// @match        *://*.zhuque.in/*
// @match        *://*.animebytes.tv/*
// @match        *://*.avistaz.to/*
// @match        *://*.beyond-hd.me/*
// @match        *://*.bibliotik.me/*
// @match        *://*.blutopia.cc/*
// @match        *://*.broadcasthe.net/*
// @match        *://*.cinemaz.to/*
// @match        *://*.digitalcore.club/*
// @match        *://*.exoticaz.to/*
// @match        *://*.filelist.io/*
// @match        *://*.gazellegames.net/*
// @match        *://*.hdbits.org/*
// @match        *://*.iptorrents.com/*
// @match        *://*.jpopsuki.eu/*
// @match        *://*.52pt.site/*
// @match        *://*.nanyangpt.com/*
// @match        *://*.52dic.vip/*
// @match        *://*.passthepopcorn.me/*
// @match        *://*.privatehd.to/*
// @match        *://*.redacted.sh/*
// @match        *://*.sportscult.org/*
// @match        *://*.superbits.org/*
// @match        *://*.uhdbits.org/*
// @match        *://*.keepfrds.com/*
// @match        *://*.byr.pt/*
// @match        *://*.tju.pt/*
// @match        *://*.tjupt.org/*
// @match        *://*.chdbits.co/*
// @match        *://*.chdbits.xyz/*
// @match        *://*.chddiy.xyz/*
// @match        *://*.ptchdbits.co/*
// @match        *://*.rainbowisland.co/*
// @match        *://*.hdkyl.in/*
// @match        *://*.hdkylin.top/*
// @match        *://*.hdkylin.work/*
// @match        *://*.morethantv.me/*
// @match        *://*.hitpt.com/*
// @match        *://*.ubits.club/*
// @match        *://*.ultrahd.net/*
// @match        *://*.ptcafe.club/*
// @match        *://*.zmpt.cc/*
// @match        *://*.orpheus.network/*
// @match        *://*.pandapt.net/*
// @match        *://*.1ptba.com/*
// @match        *://*.icc2022.com/*
// @match        *://*.cyanbug.net/*
// @match        *://*.ilovelemonhd.me/*
// @match        *://*.lemonhd.club/*
// @match        *://*.lemonhd.net/*
// @match        *://*.lemonhd.org/*
// @match        *://*.beitai.pt/*
// @match        *://*.nexushd.org/*
// @match        *://*.bitpt.cn/*
// @match        *://*.hdchina.org/*
// @match        *://*.hdcmct.org/*
// @match        *://*.hdhome.org/*
// @match        *://*.hdsky.me/*
// @match        *://*.hdzone.me/*
// @match        *://*.pt.soulvoice.club/*
// @match        *://*.pt.btschool.club/*
// @match        *://*.bt.byr.cn/*
// @match        *://*.pt.hdupt.com/*
// @match        *://*.neu6.edu.cn/*
// @match        *://*.pt.upxin.net/*
// @match        *://*.pt.0ff.cc/*
// @match        *://*.share.ilolicon.com/*
// @match        *://*.pt.hd4fans.org/*
// @match        *://*.pt.nwsuaf6.edu.cn/*
// @match        *://*.hudbt.hust.edu.cn/*
// @match        *://*.pt.xauat.edu.cn/*
// @match        *://*.pt.sjtu.edu.cn/*
// @match        *://*.myanonamouse.net/*
// @match        *://*.nebulance.io/*
// @match        *://*.torrentleech.cc/*
// @match        *://*.torrentleech.org/*
// @match        *://*.skyey2.com/*
// @match        *://*.skyeysnow.com/*
// @match        *://*.m-team.cc/*
// @match        *://*.m-team.io/*
// @match        *://*.mt.cc/*
// @match        *://*.dmhy.best/*
// @match        *://*.dmhy.org/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const HOST = window.location.hostname;
    const PATH = window.location.pathname;

    // 生成随机延时（默认 1500ms ~ 3500ms）
    function getRandomDelay(min = 1500, max = 3500) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 获取今日缓存 Key（按站点独立记录）
    function getTodayKey(suffix = 'done') {
        const dateStr = new Date().toLocaleDateString('zh-CN');
        return `pt_checkin_${HOST}_${dateStr}_${suffix}`;
    }

    // 注册油猴菜单命令：随时一键清除当前站点今日缓存并立刻重测
    if (typeof GM_registerMenuCommand === 'function') {
        GM_registerMenuCommand('🔄 重置本站今日签到缓存并立即重测', () => {
            GM_deleteValue(getTodayKey('done'));
            GM_deleteValue(getTodayKey('redirected'));
            showToast('已清除本站今日缓存，正在重新执行签到...', '#1890ff');
            setTimeout(runCheckin, 300);
        });
    }

    // 在页面右上角显示轻量状态提示
    function showToast(msg, bgColor = '#1890ff') {
        const div = document.createElement('div');
        div.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 999999;
            background: ${bgColor};
            color: #fff;
            padding: 10px 18px;
            border-radius: 6px;
            font-size: 13px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: opacity 0.4s ease;
            pointer-events: none;
        `;
        div.innerText = `[PT签到助手] ${msg}`;
        document.body.appendChild(div);
        setTimeout(() => {
            div.style.opacity = '0';
            setTimeout(() => div.remove(), 400);
        }, 4000);
    }

    // 在主页面（Main World）上下文中执行代码，绕过油猴沙盒隔离限制
    function runInPageContext(fnCode) {
        const script = document.createElement('script');
        script.textContent = `(() => { try { ${fnCode} } catch(e) { console.error('[PT签到助手 PageContext]', e); } })();`;
        (document.head || document.documentElement).appendChild(script);
        script.remove();
    }

    // 提取元素的文本内容（兼容 input 的 value 和普通标签的 innerText）
    function getElementText(el) {
        if (!el) return '';
        return (el.value || el.innerText || el.textContent || el.title || '').replace(/\s+/g, ' ').trim();
    }

    // 判断元素文本是否代表“已签到”（去除空格后比对，兼容“已 签 到”）
    function isAlreadySignedText(text) {
        if (!text) return false;
        const noSpace = text.replace(/\s+/g, '');
        const doneKeywords = [
            '已签到', '签到成功', '签到已得', '已经签到', '已经打卡', '已打卡',
            '已领取', 'Signed', 'Checked', '获得魔力', '今日已', '今日已签'
        ];
        return doneKeywords.some(k => noSpace.includes(k));
    }

    // 判断元素文本是否代表“未签到”（去除空格后比对，兼容 HDWinG 的“签 到”与猫站的“签到得猫粮”）
    function isUncheckedText(text) {
        if (!text || isAlreadySignedText(text)) return false;
        const noSpace = text.replace(/\s+/g, '');

        const targetKeywords = [
            '签到', '打卡', '每日签到', '每日打卡', '立即签到',
            '签到得猫粮', '领取猫粮', '领取魔力', '簽到', 'Checkin', 'Attendance'
        ];
        return targetKeywords.some(k => noSpace.includes(k));
    }

    // 触发链接跳转或原生按钮点击
    function triggerElement(el, text, markDoneImmediately = true) {
        const href = (el.getAttribute && el.getAttribute('href')) || '';

        // 只有明确指向独立 php 页面（如 attendance.php / showup.php）且不含 ajax 的才执行整页跳转
        const isPageJump =
            href &&
            !href.startsWith('javascript:') &&
            !href.startsWith('#') &&
            !href.includes('ajax') &&
            (href.includes('attendance.php') || href.includes('showup.php') || href.includes('bakatest.php'));

        if (isPageJump) {
            if (GM_getValue(getTodayKey('redirected'), false)) {
                return;
            }
            GM_setValue(getTodayKey('redirected'), true);
            showToast(`发现【${text}】页面入口，正在自动跳转...`, '#1890ff');
            window.location.href = el.href;
        } else {
            if (markDoneImmediately) {
                GM_setValue(getTodayKey('done'), true);
            }
            showToast(`发现【${text}】按钮，正在自动点击...`, '#52c41a');
            el.click();
        }
    }

    // =========================================================================
    // 专项站点 1：HDArea (hdarea.club) 穿透沙盒调用原生 sign_in() + POST 双保险
    // =========================================================================
    function handleHDArea() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        const signSpan = document.querySelector('#sign_in');
        const signLink = document.querySelector('#sign_in a, a[onclick*="sign_in"], a[href*="sign_in"]');
        const targetText = getElementText(signLink || signSpan);

        if (isAlreadySignedText(targetText)) {
            GM_setValue(getTodayKey('done'), true);
            return;
        }

        if (signLink || (signSpan && isUncheckedText(targetText))) {
            GM_setValue(getTodayKey('done'), true);
            showToast('发现 HDArea 签到按钮，正在执行签到...', '#52c41a');

            // 方式 A：注入主页面直接调用 HDArea 原生的 sign_in() 函数
            runInPageContext(`
                if (typeof window.sign_in === 'function') {
                    window.sign_in();
                } else {
                    const a = document.querySelector('#sign_in a, a[onclick*="sign_in"]');
                    if (a) a.click();
                }
            `);

            // 方式 B：延时 500ms 检查，如果页面上的 #sign_in 还没变成已签到，直接用 fetch POST 请求 sign_in.php 接口
            setTimeout(() => {
                const currentSpan = document.querySelector('#sign_in');
                const currentText = getElementText(currentSpan);
                if (currentSpan && isAlreadySignedText(currentText)) {
                    return;
                }
                fetch('/sign_in.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                    body: 'action=sign_in',
                    credentials: 'same-origin'
                })
                    .then(r => r.text())
                    .then(resText => {
                        if (resText && resText.trim()) {
                            if (currentSpan) currentSpan.innerHTML = resText;
                            showToast(`HDArea 签到完成：${resText.replace(/<[^>]+>/g, '').trim()}`, '#52c41a');
                        }
                    })
                    .catch(err => console.error('[PT签到助手] HDArea POST 异常:', err));
            }, 600);
        }
    }

    // =========================================================================
    // 专项站点 2：猪猪网 (piggo.me) 万年历签到（兼容 div/span/button 与 React 事件）
    // =========================================================================
    function handlePiggo() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        // 如果已经在 /calendar 万年历页面，轮询扫描“签到：+1000”按钮
        if (PATH.includes('/calendar')) {
            let attempts = 0;
            const timer = setInterval(() => {
                attempts++;

                // 扫描所有可能的标签（猪站橙色胶囊可能是 div、span 或 button）
                const allNodes = document.querySelectorAll('button, div, span, a');
                let targetEl = null;
                let matchedText = '';

                for (const el of allNodes) {
                    // 只找最内层包含该文字的节点（子元素不超过 2 个），避免选中整个网页外框容器
                    if (el.children.length > 2) continue;
                    const text = getElementText(el);
                    if (!text) continue;
                    const noSpace = text.replace(/\s+/g, '');
                    if (noSpace.length > 16) continue;

                    // 1. 如果页面上已经显示“已签到” / “今日已签”
                    if (noSpace === '已签到' || noSpace === '今日已签' || noSpace === '已签') {
                        clearInterval(timer);
                        GM_setValue(getTodayKey('done'), true);
                        showToast('猪站今日已完成签到！', '#52c41a');
                        return;
                    }

                    // 2. 严格匹配猪站日历页橙色按钮格式：“签到：+1000” / “签到:+1000” / “签到+1000”
                    if (/^签到[:：]?[+＋]?\d+$/.test(noSpace) || noSpace === '立即签到') {
                        targetEl = el;
                        matchedText = text;
                        break;
                    }
                }

                if (targetEl) {
                    clearInterval(timer);
                    GM_setValue(getTodayKey('done'), true);
                    // 给目标节点打上临时属性，供主页面脚本精准定位并触发 React 完整事件链
                    targetEl.setAttribute('data-pt-auto-target', '1');
                    showToast(`发现猪站【${matchedText}】按钮，正在自动点击...`, '#52c41a');

                    runInPageContext(`
                        const el = document.querySelector('[data-pt-auto-target="1"]');
                        if (el) {
                            // 依次收集自身、父级、祖父级（应对事件绑定在外层胶囊 div 或 button 上的情况）
                            const targets = [el, el.parentElement, el.closest('button, [role="button"], a')].filter(Boolean);
                            const uniqueTargets = [...new Set(targets)];
                            uniqueTargets.forEach(t => {
                                ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(type => {
                                    t.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, view: window }));
                                });
                                if (typeof t.click === 'function') t.click();
                            });
                        }
                    `);
                    return;
                }

                if (attempts >= 15) {
                    clearInterval(timer);
                }
            }, 800);
            return;
        }

        // 如果不在 /calendar 页面且今日尚未跳转过，自动跳转至 /calendar
        if (!GM_getValue(getTodayKey('redirected'), false)) {
            GM_setValue(getTodayKey('redirected'), true);
            showToast('正在自动跳转至猪站【签到/万年历】页面...', '#1890ff');
            window.location.href = `${window.location.origin}/calendar`;
        }
    }

    // =========================================================================
    // 专项站点 3：猫站 (pterclub.net / pterclub.com) 【签到得猫粮】精准点击
    // =========================================================================
    function handlePTerClub() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        const links = document.querySelectorAll('a#attendance-click, a[href*="attendance"], a.faqlink, a');
        for (const a of links) {
            const text = getElementText(a);
            if (!text || text.length > 15) continue;
            const noSpace = text.replace(/\s+/g, '');

            if (isAlreadySignedText(noSpace)) {
                GM_setValue(getTodayKey('done'), true);
                return;
            }

            if (noSpace === '签到得猫粮' || noSpace.includes('签到得猫粮') || a.id === 'attendance-click') {
                GM_setValue(getTodayKey('done'), true);
                showToast(`发现猫站【${text}】按钮，正在自动点击...`, '#52c41a');
                a.click();
                return;
            }
        }
    }

    // =========================================================================
    // 专项站点 4：HDSky (hdsky.me) 自动点击签到拉起验证码框并高亮输入框
    // =========================================================================
    function handleHDSky() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        const links = document.querySelectorAll('a[onclick*="show_image_code"], a[onclick*="sign"], a.faqlink, a');
        for (const a of links) {
            const text = getElementText(a);
            if (!text || text.length > 10) continue;
            const noSpace = text.replace(/\s+/g, '');

            if (noSpace === '已签到' || noSpace === '[已签到]' || isAlreadySignedText(noSpace)) {
                GM_setValue(getTodayKey('done'), true);
                return;
            }

            if (noSpace === '签到' || noSpace === '[签到]') {
                showToast('已为您自动拉起 HDSky 签到验证码窗口，请输入验证码！', '#faad14');
                a.click();

                setTimeout(() => {
                    const input = document.querySelector('input[name*="imagestring"], input[id*="imagestring"], input[type="text"][name*="code"]');
                    if (input) {
                        input.style.outline = '3px solid #ff4d4f';
                        input.focus();
                    }
                }, 600);
                return;
            }
        }
    }

    // 针对签到专页（如 attendance.php）的二次提交或状态确认处理
    function handleAttendancePage() {
        const pageText = document.body.innerText || '';

        const hasCaptcha = document.querySelector('input[name*="imagestring"], input[name*="captcha"], img[src*="image.php"]');
        if (hasCaptcha) {
            showToast('当前签到页含验证码，请手动完成输入', '#faad14');
            hasCaptcha.style.outline = '3px solid #ff4d4f';
            hasCaptcha.focus();
            return;
        }

        const submitBtns = document.querySelectorAll('input[type="submit"], input[type="button"], button[type="submit"], button');
        for (const btn of submitBtns) {
            const val = getElementText(btn).replace(/\s+/g, '');
            if (!btn.disabled && (val.includes('签到') || val.includes('打卡') || val.includes('提交') || val.includes('领取'))) {
                showToast('正在自动提交签到表单...', '#52c41a');
                btn.click();
                GM_setValue(getTodayKey('done'), true);
                return;
            }
        }

        const cleanPageText = pageText.replace(/\s+/g, '');
        if (
            cleanPageText.includes('签到成功') ||
            cleanPageText.includes('已签到') ||
            cleanPageText.includes('已经签到') ||
            cleanPageText.includes('获得了') ||
            cleanPageText.includes('魔力值') ||
            cleanPageText.includes('连续签到')
        ) {
            GM_setValue(getTodayKey('done'), true);
            showToast('今日签到已完成！', '#52c41a');
        }
    }

    // 主入口：扫描导航栏与页面签到按钮
    function runCheckin() {
        // 专项站点优先分流
        if (HOST.includes('hdarea.club')) {
            handleHDArea();
            return;
        }
        if (HOST.includes('piggo.me')) {
            handlePiggo();
            return;
        }
        if (HOST.includes('pterclub')) {
            handlePTerClub();
            return;
        }
        if (HOST.includes('hdsky.me')) {
            handleHDSky();
            return;
        }

        // 如果当前已经在 attendance.php 等签到专页，执行专页逻辑
        if (PATH.includes('attendance.php') || PATH.includes('bakatest.php')) {
            handleAttendancePage();
            return;
        }

        // 如果今日已标记完成，跳过扫描
        if (GM_getValue(getTodayKey('done'), false)) {
            console.log(`[PT签到助手] ${HOST} 今日已签到，跳过检测。`);
            return;
        }

        // 1. 特殊站点专用选择器适配
        const specialRules = [
            // 海胆之家 (haidan.cc / haidan.video) - <input type="submit" id="modalBtn" value="每日打卡">
            {
                host: 'haidan',
                selector: '#modalBtn, input[value*="每日打卡"], input[value*="已经打卡"], button[id*="modalBtn"]'
            },
            // HDChina / HDWinG (hdwing.org / hdchina.org) - 右上角按钮“签 到”
            {
                host: 'hdwing.org',
                selector: 'a.label-default[onclick*="signin"], a[onclick*="signin"], #sign_in, a[href*="attendance.php"], .label-default, a'
            },
            {
                host: 'hdchina.org',
                selector: 'a.label-default[onclick*="signin"], a[onclick*="signin"], #sign_in, a[href*="attendance.php"]'
            },
            // TTG (totheglory.im) - a#signed
            {
                host: 'totheglory.im',
                selector: 'a#signed, #signed a, a[onclick*="signed"]'
            },
            // PlayLet (playlet.cc)
            {
                host: 'playlet.cc',
                selector: 'a[href*="attendance.php"], a.faqlink[href*="attendance"], #sign_in, [onclick*="attendance"], a[href*="sign"]'
            },
            // HDCity (hdcity.city)
            {
                host: 'hdcity.city',
                selector: 'a[href*="sign"]'
            },
            // U2 (dmhy.org / dmhy.best)
            {
                host: 'dmhy',
                selector: 'a[href*="showup.php"]'
            }
        ];

        for (const rule of specialRules) {
            if (HOST.includes(rule.host)) {
                const elements = document.querySelectorAll(rule.selector);
                for (const el of elements) {
                    const text = getElementText(el);
                    if (!text || text.length > 15) continue;
                    if (el.disabled || isAlreadySignedText(text)) {
                        GM_setValue(getTodayKey('done'), true);
                        console.log(`[PT签到助手] ${HOST} 检测到已打卡/已签到状态 (${text})`);
                        return;
                    }
                    if (isUncheckedText(text)) {
                        triggerElement(el, text);
                        return;
                    }
                }
            }
        }

        // 2. 通用 NexusPHP 签到链接/按钮选择器
        const commonSelectors = [
            'a[href*="attendance.php"]',
            'a[href*="attendance-ajax.php"]',
            'a.faqlink[href*="attendance"]',
            'a.label-default[onclick*="signin"]',
            'a[onclick*="signin"]',
            'a[onclick*="sign_in"]',
            '#attendance-click',
            '#modalBtn',
            'a[href*="action=sign"]',
            'a[onclick*="sign"]',
            'a[onclick*="attendance"]',
            '#sign_in a',
            '#sign_in',
            '.sign-in',
            'button[class*="sign"]',
            'a[id*="sign"]',
            'input[type="submit"][value*="打卡"]',
            'input[type="button"][value*="打卡"]',
            'input[type="submit"][value*="签到"]',
            'input[type="button"][value*="签到"]'
        ];

        for (const sel of commonSelectors) {
            const elements = document.querySelectorAll(sel);
            for (const el of elements) {
                const text = getElementText(el);
                if (el.disabled || isAlreadySignedText(text)) {
                    GM_setValue(getTodayKey('done'), true);
                    return;
                }
                if (isUncheckedText(text)) {
                    triggerElement(el, text);
                    return;
                }
            }
        }

        // 3. 兜底扫描：遍历所有 <a>、<button>、<input> 以及可点击的 <span>
        const allButtons = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], span[onclick], span[id*="sign"], span[class*="btn"], span[class*="sign"], span[class*="label"]');
        const exactTargetsNoSpace = [
            '签到', '[签到]', '每日签到', '立即签到', '点此签到',
            '打卡', '每日打卡', '[每日打卡]',
            '签到得猫粮', '[签到得猫粮]', '领取猫粮', '领取魔力'
        ];

        for (const el of allButtons) {
            const text = getElementText(el);
            if (!text || text.length > 20) continue;

            if (isAlreadySignedText(text)) {
                GM_setValue(getTodayKey('done'), true);
                return;
            }

            const noSpace = text.replace(/\s+/g, '');
            if (
                !el.disabled &&
                (exactTargetsNoSpace.includes(noSpace) ||
                    noSpace.includes('签到得猫粮') ||
                    noSpace.includes('每日打卡') ||
                    noSpace.includes('立即签到') ||
                    noSpace.includes('点此签到'))
            ) {
                triggerElement(el, text);
                return;
            }
        }
    }

    // 页面加载完毕后，使用随机延时执行
    window.addEventListener('load', () => {
        const delay = getRandomDelay(1500, 3500);
        console.log(`[PT签到助手] 已匹配站点 ${HOST}，将在 ${delay}ms 后检测签到状态...`);
        setTimeout(runCheckin, delay);
    });
})();
