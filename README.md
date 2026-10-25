# PT Auto Check-in (PT 站点全自动签到油猴脚本)

[![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/kylo1989/PT-Auto-Check-in)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/kylo1989/PT-Auto-Check-in/blob/main/LICENSE)

一个开箱即用的 Tampermonkey（油猴）自动签到脚本。内置 **122 个主流国内外 PT 站点**的域名匹配规则（源自 `MetaCubeX/meta-rules-dat` 的 `category-pt` 目录），在你日常打开浏览器访问 PT 站时，自动通过随机延时完成签到点击或跳转至签到页面。

## ✨ 核心特性

- **122 站开箱即用**：完整内置国内外 122 个主流 PT 站点 `@match` 规则，无需手动配置域名。
- **随机延时防风控**：每次页面加载后采用 `1.5s ~ 3.8s` 的随机延时触发操作，避免固定毫秒级机械点击触发站点反作弊机制。
- **双模式自动处理**：
  - **AJAX 按钮模式**：自动识别页面内的异步签到按钮（如 TTG、海胆、常规 NexusPHP 局部签到）并触发点击。
  - **签到页跳转模式**：针对需要访问 `attendance.php` 的站点，自动跳转至签到页并执行确认提交。
- **每日状态本地持久化**：基于 `GM_setValue` 按站点域名记录每日签到状态，当天签到完成后不再重复执行 DOM 扫描或重复跳转。
- **可视化状态提示**：触发签到或检测到验证码时，页面右上角提供轻量级 Toast 悬浮通知。

## 🚀 安装方法

### 第一步：安装脚本管理器
如果你尚未安装油猴扩展，请根据浏览器选择安装：
- Chrome / Edge: [Tampermonkey](https://www.tampermonkey.net/) 或 [ScriptCat (脚本猫)](https://docs.scriptcat.org/)
- Firefox: [Tampermonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/) 或 [Violentmonkey](https://violentmonkey.github.io/)

### 第二步：一键安装本脚本
已安装油猴扩展的用户，点击下方按钮或链接即可直接弹出脚本安装界面：

[![Install via GitHub](https://img.shields.io/badge/一键安装-GitHub_Raw_(官方源)-2ea44f?style=for-the-badge&logo=tampermonkey)](https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js)
[![Install via jsDelivr](https://img.shields.io/badge/一键安装-jsDelivr_(国内加速)-1890ff?style=for-the-badge&logo=cloudflare)](https://fastly.jsdelivr.net/gh/kylo1989/PT-Auto-Check-in@main/pt-auto-checkin.user.js)

- 👉 **GitHub Raw 直链安装**：[https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js](https://raw.githubusercontent.com/kylo1989/PT-Auto-Check-in/refs/heads/main/pt-auto-checkin.user.js)
- 👉 **jsDelivr CDN 加速安装**：[https://fastly.jsdelivr.net/gh/kylo1989/PT-Auto-Check-in@main/pt-auto-checkin.user.js](https://fastly.jsdelivr.net/gh/kylo1989/PT-Auto-Check-in@main/pt-auto-checkin.user.js)

*(如果点击链接后未弹出安装界面，可直接复制仓库中 [`pt-auto-checkin.user.js`](https://github.com/kylo1989/PT-Auto-Check-in/blob/main/pt-auto-checkin.user.js) 的源码，在油猴扩展中点击“添加新脚本”粘贴保存即可)*

## 📋 支持站点列表 (122 个域名)

<details>
<summary>点击展开查看完整支持域名清单</summary>

- `jptv.club`, `wintersakura.net`, `audiences.me`, `carpt.net`, `ccfbits.org`, `cinefiles.info`, `dicmusic.com`, `eastgame.org`, `et8.org`, `greatposterwall.com`
- `haidan.video`, `hdarea.club`, `hdatmos.club`, `hdcity.city`, `hddolby.com`, `hdfans.org`, `hdmayi.com`, `hdpt.xyz`, `hdtime.org`, `hdvideo.one`
- `hhan.club`, `hhanclub.top`, `hhanclub.net`, `ianon.app`, `kufei.com`, `kufei.org`, `leaves.red`, `nicept.net`, `open.cd`, `piggo.me`
- `ptchina.org`, `pthome.net`, `ptsbao.club`, `pttime.org`, `pttime.top`, `rousi.zip`, `totheglory.im`, `springsunday.net`, `pterclub.net`, `pterclub.com`
- `ourbits.club`, `npupt.com`, `sharkpt.net`, `zhuque.in`, `animebytes.tv`, `avistaz.to`, `beyond-hd.me`, `bibliotik.me`, `blutopia.cc`, `broadcasthe.net`
- `cinemaz.to`, `digitalcore.club`, `exoticaz.to`, `filelist.io`, `gazellegames.net`, `hdbits.org`, `iptorrents.com`, `jpopsuki.eu`, `52pt.site`, `nanyangpt.com`
- `52dic.vip`, `passthepopcorn.me`, `privatehd.to`, `redacted.sh`, `sportscult.org`, `superbits.org`, `uhdbits.org`, `keepfrds.com`, `byr.pt`, `tju.pt`
- `tjupt.org`, `chdbits.co`, `chdbits.xyz`, `chddiy.xyz`, `ptchdbits.co`, `rainbowisland.co`, `hdkyl.in`, `hdkylin.top`, `hdkylin.work`, `morethantv.me`
- `hitpt.com`, `ubits.club`, `ultrahd.net`, `ptcafe.club`, `zmpt.cc`, `orpheus.network`, `pandapt.net`, `1ptba.com`, `icc2022.com`, `cyanbug.net`
- `ilovelemonhd.me`, `lemonhd.club`, `lemonhd.net`, `lemonhd.org`, `beitai.pt`, `nexushd.org`, `bitpt.cn`, `hdchina.org`, `hdcmct.org`, `hdhome.org`
- `hdsky.me`, `hdzone.me`, `pt.soulvoice.club`, `pt.btschool.club`, `bt.byr.cn`, `pt.hdupt.com`, `neu6.edu.cn`, `pt.upxin.net`, `pt.0ff.cc`, `share.ilolicon.com`
- `pt.hd4fans.org`, `pt.nwsuaf6.edu.cn`, `hudbt.hust.edu.cn`, `pt.xauat.edu.cn`, `pt.sjtu.edu.cn`, `myanonamouse.net`, `nebulance.io`, `torrentleech.cc`, `torrentleech.org`, `skyey2
