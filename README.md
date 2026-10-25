# PT Auto Check-in (PT 站点全自动签到油猴脚本)

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

### 第二步：安装本脚本
点击下方 Raw 链接即可直接弹出安装界面：

👉 **[点此一键安装 `pt-auto-checkin.user.js`](https://raw.githubusercontent.com/kylo1989/pt-auto-checkin/main/pt-auto-checkin.user.js)**

*(或者直接复制仓库中 `pt-auto-checkin.user.js` 的源码，在油猴扩展中点击“添加新脚本”粘贴保存即可)*

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
- `pt.hd4fans.org`, `pt.nwsuaf6.edu.cn`, `hudbt.hust.edu.cn`, `pt.xauat.edu.cn`, `pt.sjtu.edu.cn`, `myanonamouse.net`, `nebulance.io`, `torrentleech.cc`, `torrentleech.org`, `skyey2.com`
- `skyeysnow.com`, `m-team.cc`, `m-team.io`, `mt.cc`, `dmhy.best`, `dmhy.org`

</details>

## ⚙️ 工作机制说明

1. **常规无验证站点**：打开站点任意页面后，脚本在后台等待随机秒数，检测到“签到 / 打卡 / 每日签到”按钮后自动触发点击或跳转至 `attendance.php` 完成签到。
2. **含图文验证码/问答题站点**（如 HDSky、U2 动漫花园等）：脚本会自动帮你跳转到签到区域，并自动用红框高亮聚焦验证码输入框，弹出提醒由人工完成验证输入，避免因错误提交导致扣除魔力或触发账号警告。
3. **无签到机制站点**（如 M-Team、Gazelle 架构外站等）：由于这类站点仅要求保持登录访问而无签到按钮，脚本静默运行，不影响正常浏览。

## ⚠️ 免责声明

- 本项目仅供个人学习与浏览器自动化交互研究使用。
- 部分 PT 站点对自动化脚本有严格限制，请在使用前确认目标站点的用户规则（Rules）。如有特定站点不希望启用自动点击，可在 Tampermonkey 的脚本设置中添加“排除（`@exclude`）”域名。

## 📄 License

[MIT License](LICENSE)
