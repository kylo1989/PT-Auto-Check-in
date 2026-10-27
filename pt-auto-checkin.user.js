// ==UserScript==
// @name         PT 站点全自动签到助手 (124站内置版)
// @namespace    https://github.com/kylo1989/PT-Auto-Check-in
// @version      1.2.3
// @description  内置主流PT站点域名匹配，打开网页后随机延时自动点击签到按钮或自动跳转至签到页完成签到（已适配PlayLet短剧站、海胆cc每日打卡、猫站PTer签到猫粮等）。
// @author       kylo1989
// @homepageURL  https://github.com/kylo1989/PT-Auto-Check-in
// @supportURL   https://github.com/kylo1989/PT-Auto-Check-in/issues
// @updateURL    https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js
// @downloadURL  https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js
// @license      MIT
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
// @grant        GM_notification
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const HOST = window.location.hostname;
    const PATH = window.location.pathname;

    // 生成随机延时（默认 1500ms ~ 4000ms），降低机械化特征
    function getRandomDelay(min = 1500, max = 4000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 获取今日缓存 Key（按站点独立记录）
    function getTodayKey(suffix = 'done') {
        const dateStr = new Date().toLocaleDateString('zh-CN');
        return `pt_checkin_${HOST}_${dateStr}_${suffix}`;
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

    // 提取元素的文本内容（兼容 a / button / input / span 按钮）
    function getElementText(el) {
        if (!el) return '';
        return (el.innerText || el.value || el.title || el.textContent || '').replace(/\s+/g, ' ').trim();
    }

    // 判断元素文本是否代表“已签到”
    function isAlreadySignedText(text) {
        if (!text) return false;
        const doneKeywords = [
            '已签到', '签到成功', '已得', '已经签到', '已经打卡', '已打卡',
            '已领取', 'Signed', 'Checked', '获得魔力', '今日已', '签到已得'
        ];
        return doneKeywords.some(k => text.includes(k));
    }

    // 判断元素文本是否代表“未签到”
    function isUncheckedText(text) {
        if (!text || isAlreadySignedText(text)) return false;

        const targetKeywords = [
            '签到', '签 到', '打卡', '每日签到', '每日打卡', '立即签到',
            '签到得猫粮', '猫粮', '领取魔力', '簽到', 'Check in', 'Attendance'
        ];
        return targetKeywords.some(k => text.includes(k));
    }

    // 触发链接跳转或按钮点击
    function triggerElement(el, text) {
        const href = el.getAttribute('href') || '';
        GM_setValue(getTodayKey('done'), true);

        // 如果是直接跳转至常规签到页的链接（排除 ajax 接口、javascript 伪协议和锚点）
        if (href && !href.startsWith('javascript:') && !href.startsWith('#') && !href.includes('ajax')) {
            showToast(`发现【${text}】入口，正在自动跳转...`, '#1890ff');
            window.location.href = el.href;
        } else {
            showToast(`发现【${text}】按钮，正在自动点击...`, '#52c41a');
            el.click();
        }
    }

    // 针对签到专页（如 attendance.php）的二次提交或状态确认处理
    function handleAttendancePage() {
        const pageText = document.body.innerText || '';

        // 1. 如果页面提示需要填写验证码或回答问题，高亮提醒人工介入，不执行盲点
        const hasCaptcha = document.querySelector('input[name*="imagestring"], input[name*="captcha"], img[src*="image.php"]');
        if (hasCaptcha) {
            showToast('当前签到页含验证码，请手动完成输入', '#faad14');
            hasCaptcha.style.outline = '3px solid #ff4d4f';
            hasCaptcha.focus();
            return;
        }

        // 2. 查找签到专页内的确认提交按钮（例如部分站点点击 attendance.php 后需再点一次提交）
        const submitBtns = document.querySelectorAll('input[type="submit"], input[type="button"], button[type="submit"], button');
        for (const btn of submitBtns) {
            const val = getElementText(btn);
            if (!btn.disabled && (val.includes('签到') || val.includes('打卡') || val.includes('提交') || val.includes('领取'))) {
                showToast('正在自动提交签到表单...', '#52c41a');
                btn.click();
                GM_setValue(getTodayKey('done'), true);
                return;
            }
        }

        // 3. 如果直接跳转进 attendance.php 即代表完成签到
        if (
            pageText.includes('签到成功') ||
            pageText.includes('已签到') ||
            pageText.includes('已经签到') ||
            pageText.includes('获得了') ||
            pageText.includes('魔力值') ||
            pageText.includes('猫粮') ||
            pageText.includes('连续签到')
        ) {
            GM_setValue(getTodayKey('done'), true);
            showToast('今日签到已完成！', '#52c41a');
        }
    }

    // 主入口：扫描导航栏与页面签到按钮
    function runCheckin() {
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

        // 1. 特殊站点专用选择器适配（优先匹配）
        const specialRules = [
            // PlayLet (playlet.cc) - 新版 NexusPHP 签到入口适配
            {
                host: 'playlet.cc',
                selector: 'a[href*="attendance.php"], a.faqlink[href*="attendance"], #sign_in, [onclick*="attendance"], a[href*="sign"]'
            },
            // 海胆之家 (haidan.cc / haidan.video) - 按钮为 <input type="submit" id="modalBtn" value="每日打卡">
            {
                host: 'haidan',
                selector: '#modalBtn, input[value*="每日打卡"], button[id*="modalBtn"]'
            },
            // 猫站 PTerClub (pterclub.net / pterclub.com) - 按钮为“签到得猫粮” (#attendance-click)
            {
                host: 'pterclub',
                selector: '#attendance-click, a[href*="attendance-ajax.php"], a[href*="attendance.php"]'
            },
            // TTG (totheglory.im)
            {
                host: 'totheglory.im',
                selector: 'a#signed'
            },
            // HDChina (hdchina.org)
            {
                host: 'hdchina.org',
                selector: 'a.label-default[onclick*="signin"]'
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
                    // 如果按钮处于 disabled（如海胆“已经打卡”）或文本显示已签到，记录今日完成
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
            '#attendance-click',
            '#modalBtn',
            'a[href*="action=sign"]',
            'a[onclick*="sign"]',
            'a[onclick*="attendance"]',
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

        // 3. 兜底扫描：遍历所有 <a>、<button>、<input> 以及可点击的 <span> 寻找包含指定签到文本的节点
        const allButtons = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], span[onclick], span[class*="btn"], span[class*="sign"]');
        const exactTargets = [
            '签到', '[签到]', '签 到', '[签 到]', '每日签到', '立即签到', '点此签到',
            '打卡', '每日打卡', '[每日打卡]',
            '签到得猫粮', '领取猫粮', '[签到得猫粮]', '领取魔力'
        ];

        for (const el of allButtons) {
            const text = getElementText(el);
            if (!text || text.length > 20) continue; // 排除过长的正文段落

            if (isAlreadySignedText(text)) {
                GM_setValue(getTodayKey('done'), true);
                return;
            }

            if (
                !el.disabled &&
                (exactTargets.includes(text) ||
                    text.includes('签到得猫粮') ||
                    text.includes('每日打卡') ||
                    text.includes('立即签到') ||
                    text.includes('点此签到'))
            ) {
                triggerElement(el, text);
                return;
            }
        }
    }

    // 页面加载完毕后，使用随机延时执行，兼容 SPA 与异步加载节点
    window.addEventListener('load', () => {
        const delay = getRandomDelay(1500, 3800);
        console.log(`[PT签到助手] 已匹配站点 ${HOST}，将在 ${delay}ms 后检测签到状态...`);
        setTimeout(runCheckin, delay);
    });
})();
