// ==UserScript==
// @name         PT 站点全自动签到助手 (125站内置版)
// @namespace    https://github.com/kylo1989/PT-Auto-Check-in
// @version      1.2.7
// @description  基于稳定的1.2.4内核重构，使用原生click触发，全面修复HDWinG、TTG、海胆cc、HDArea、HDSky拉起验证码、猫站【签到得猫粮】及猪站【签到：+1000】。
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

    // 触发链接跳转或原生按钮点击（回归 1.2.4 最稳健的原生触发方式）
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
    // 专项站点 1：猪猪网 (piggo.me) 万年历签到处理
    // =========================================================================
    function handlePiggo() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        // 如果已经在 /calendar 万年历页面，轮询扫描真正的 <button> 节点
        if (PATH.includes('/calendar')) {
            let attempts = 0;
            const timer = setInterval(() => {
                attempts++;
                // 猪站万年历的“签到：+1000”是一个标准的 <button> 元素
                const buttons = document.querySelectorAll('button');
                for (const btn of buttons) {
                    const text = getElementText(btn);
                    if (!text) continue;
                    const noSpace = text.replace(/\s+/g, '');

                    // 如果按钮已变成“已签到”或“今日已签”或处于 disabled
                    if (isAlreadySignedText(noSpace) || noSpace === '已签' || (btn.disabled && noSpace.includes('签'))) {
                        clearInterval(timer);
                        GM_setValue(getTodayKey('done'), true);
                        showToast('猪站今日已完成签到！', '#52c41a');
                        return;
                    }

                    // 精准匹配“签到：+1000” / “签到+1000” / “签到”按钮
                    if (noSpace.includes('签到') && (noSpace.includes('+') || noSpace.includes('＋') || /\d/.test(noSpace) || noSpace === '签到')) {
                        clearInterval(timer);
                        GM_setValue(getTodayKey('done'), true);
                        showToast(`发现猪站【${text}】按钮，正在自动点击...`, '#52c41a');
                        btn.click();
                        return;
                    }
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
    // 专项站点 2：猫站 (pterclub.net / pterclub.com) 【签到得猫粮】精准点击
    // =========================================================================
    function handlePTerClub() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        // 遍历页面所有 a 标签，精准匹配“签到得猫粮”
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
    // 专项站点 3：HDSky (hdsky.me) 自动点击签到拉起验证码框并高亮输入框
    // =========================================================================
    function handleHDSky() {
        if (GM_getValue(getTodayKey('done'), false)) return;

        // 查找 HDSky 顶部导航栏中的“签到”或“已签到”
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
                // 注意：HDSky 点击签到只是拉起验证码弹窗，此时不标记 done，方便用户填验证码
                showToast('已为您自动拉起 HDSky 签到验证码窗口，请输入验证码！', '#faad14');
                a.click();

                // 延时 600ms 等待验证码输入框弹出后自动聚焦并加红框高亮
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

        // 1. 如果页面提示需要填写验证码或回答问题，高亮提醒人工介入
        const hasCaptcha = document.querySelector('input[name*="imagestring"], input[name*="captcha"], img[src*="image.php"]');
        if (hasCaptcha) {
            showToast('当前签到页含验证码，请手动完成输入', '#faad14');
            hasCaptcha.style.outline = '3px solid #ff4d4f';
            hasCaptcha.focus();
            return;
        }

        // 2. 查找签到专页内的确认提交按钮
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

        // 3. 如果直接跳转进 attendance.php 即代表完成签到
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

        // 1. 特殊站点专用选择器适配（完全基于 1.2.4 稳定逻辑，并补齐 HDArea、海胆、HDWinG、TTG）
        const specialRules = [
            // 海胆之家 (haidan.cc / haidan.video) - <input type="submit" id="modalBtn" value="每日打卡">
            {
                host: 'haidan',
                selector: '#modalBtn, input[value*="每日打卡"], input[value*="已经打卡"], button[id*="modalBtn"]'
            },
            // HDArea (hdarea.club) - <span id="sign_in"><a onclick="sign_in();">...</a></span>
            {
                host: 'hdarea.club',
                selector: '#sign_in a, a[onclick*="sign_in"], #sign_in, [onclick*="sign_in"]'
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
