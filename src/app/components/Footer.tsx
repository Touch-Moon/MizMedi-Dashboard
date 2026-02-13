import React from "react";
import svgPaths from "../../imports/svg-z9kn4sv0oi";
import imgImgIcon from "figma:asset/img-icon-badge-01.png";
import imgBackgroundImage3 from "figma:asset/bg-footer.jpg";
import imgGuideFloor022 from "figma:asset/ico-building-line.svg";
import imgHealthInsurance from "figma:asset/logo-health_insurance_review.svg";
import { imgBackgroundImage2 } from "../../imports/svg-69a54";


import "./SectionFooter.scss";

function Menu() {
  return (
    <div className="section-footer__menu" data-name="menu">
      <div className="section-footer__menu-item">
        <p>이용안내</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item section-footer__menu-item--highlight">
        <p>개인정보 처리방침</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item">
        <p>환자권리장전</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item">
        <p>비급여진료비안내</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item">
        <p>진료협력센터</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item">
        <p>International Patients</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item">
        <p>기관생명윤리위원회 (IRB)</p>
      </div>
      <div className="section-footer__menu-divider" />
      <div className="section-footer__menu-item">
        <p> 안전보건 경영방침</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="section-footer__info-row section-footer__info-row--narrow">
      <div className="section-footer__info-text">
        <p>서울특별시 강서구 강서로 295</p>
      </div>
      <div className="section-footer__info-divider" />
      <div className="section-footer__info-text">
        <p>의)성삼의료재단 미즈메디병원</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="section-footer__info-row">
      <div className="section-footer__info-text">
        <p>대표전화 : 1588-2701</p>
      </div>
      <div className="section-footer__info-divider" />
      <div className="section-footer__info-text">
        <p>대표 : 노성일 </p>
      </div>
      <div className="section-footer__info-divider" />
      <div className="section-footer__info-text">
        <p>사업자등록번호 : 109-82-06699</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="section-footer__info-rows">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Info() {
  return (
    <div className="section-footer__info" data-name="info">
      <Frame14 />
      <p className="section-footer__copyright">COPYRIGHT© MIZMEDI HOSIPTAL. ALL RIGHTS RESERVED.</p>
    </div>
  );
}

function SnsDefaultStyle() {
  return (
    <div className="section-footer__icon" data-name="sns_Default/style14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 24.0353">
        <g id="jt-naver blog">
          <path d={svgPaths.p23100a00} fill="var(--fill-0, #777777)" id="Vector" />
          <path d={svgPaths.p3ef3a200} fill="var(--fill-0, #777777)" id="Vector_2" />
          <path d={svgPaths.p271eb100} fill="var(--fill-0, #777777)" id="Vector_3" />
          <path d={svgPaths.p3e7d1000} fill="var(--fill-0, #777777)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function SnsDefaultStyle1() {
  return (
    <div className="section-footer__icon" data-name="sns_Default/style14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 24.0353">
        <g id="jt-instagram">
          <path d={svgPaths.p30b38800} fill="var(--fill-0, #777777)" id="Vector" />
          <path d={svgPaths.p149ed500} fill="var(--fill-0, #777777)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="section-footer__icon-center" data-name="_寃⑸━_紐⑤뱶">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7027 18">
        <g clipPath="url(#clip0_1_427)" id="_å¯â¸â_ï§â¤ë±¶">
          <path d={svgPaths.p380d1900} fill="var(--fill-0, #777777)" id="Exclude" />
        </g>
        <defs>
          <clipPath id="clip0_1_427">
            <rect fill="white" height="18" width="19.7027" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SnsDefaultStyle2() {
  return (
    <div className="section-footer__icon" data-name="sns_Default/style14">
      <Component />
    </div>
  );
}

function SnsDefaultStyle3() {
  return (
    <div className="section-footer__icon" data-name="sns_Default/style14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 24.0353">
        <g id="jt-facebook">
          <path d={svgPaths.p9903a00} fill="var(--fill-0, #777777)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="section-footer__icons" data-name="icons">
      <SnsDefaultStyle />
      <SnsDefaultStyle1 />
      <SnsDefaultStyle2 />
      <SnsDefaultStyle3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="section-footer__badge-inner" data-name="icon-01">
      <p className="section-footer__badge-label">
        보건복지부
        <br aria-hidden="true" />
        의료기관 인증병원
      </p>
      <div className="section-footer__badge-img" data-name="img-icon">
        <img alt="" src={imgImgIcon} />
      </div>
    </div>
  );
}

function Xmlid5() {
  return (
    <div className="section-footer__xmlid-5" data-name="XMLID_362_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3655 34.8806">
        <g id="XMLID_362_">
          <g id="XMLID_364_">
            <path d={svgPaths.p378ef080} fill="var(--fill-0, #8DD2E4)" id="XMLID_175_" />
            <path d={svgPaths.p19e88580} fill="var(--fill-0, #8DD2E4)" id="XMLID_174_" />
            <path d={svgPaths.p18aa9f00} fill="var(--fill-0, #72A4CD)" id="XMLID_173_" />
            <path d={svgPaths.p3db99500} fill="var(--fill-0, #72A4CD)" id="XMLID_172_" />
            <path d={svgPaths.p32853800} fill="var(--fill-0, #5877B6)" id="XMLID_171_" />
            <path d={svgPaths.p323de900} fill="var(--fill-0, #5877B6)" id="XMLID_170_" />
            <path d={svgPaths.p2986a080} fill="var(--fill-0, #3D50A2)" id="XMLID_169_" />
            <path d={svgPaths.p2fa9300} fill="var(--fill-0, #3D50A2)" id="XMLID_168_" />
          </g>
          <path d={svgPaths.p114ca500} fill="var(--fill-0, #212481)" id="XMLID_167_" />
        </g>
      </svg>
    </div>
  );
}

function Xmlid4() {
  return (
    <div className="section-footer__xmlid-4" data-name="XMLID_271_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3343 34.8694">
        <g id="XMLID_271_">
          <g id="XMLID_166_" />
          <g id="XMLID_165_" />
          <g id="XMLID_327_">
            <path d={svgPaths.pc38e700} fill="var(--fill-0, #CFDDE0)" id="XMLID_164_" />
            <path d={svgPaths.p3e5da700} fill="var(--fill-0, #CFDDE0)" id="XMLID_163_" />
            <path d={svgPaths.p17be1900} fill="var(--fill-0, #CFDDE0)" id="XMLID_162_" />
            <path d={svgPaths.p23519180} fill="var(--fill-0, #CFDDE0)" id="XMLID_161_" />
            <path d={svgPaths.p3ee7e200} fill="var(--fill-0, #CFDDE0)" id="XMLID_160_" />
            <path d={svgPaths.pc6ccc00} fill="var(--fill-0, #CFDDE0)" id="XMLID_159_" />
            <path d={svgPaths.p326e5900} fill="var(--fill-0, #CFDDE0)" id="XMLID_158_" />
            <path d={svgPaths.p17ec200} fill="var(--fill-0, #CFDDE0)" id="XMLID_157_" />
            <path d={svgPaths.p1d3a6e00} fill="var(--fill-0, #CFDDE0)" id="XMLID_156_" />
            <path d={svgPaths.p192fda80} fill="var(--fill-0, #CFDDE0)" id="XMLID_155_" />
            <path d={svgPaths.p32de9500} fill="var(--fill-0, #CFDDE0)" id="XMLID_154_" />
            <path d={svgPaths.p488080} fill="var(--fill-0, #CFDDE0)" id="XMLID_153_" />
            <path d={svgPaths.p31155400} fill="var(--fill-0, #CFDDE0)" id="XMLID_152_" />
            <path d={svgPaths.p1fc4d300} fill="var(--fill-0, #CFDDE0)" id="XMLID_151_" />
            <path d={svgPaths.p375cee00} fill="var(--fill-0, #CFDDE0)" id="XMLID_150_" />
            <path d={svgPaths.p29a86880} fill="var(--fill-0, #CFDDE0)" id="XMLID_149_" />
            <path d={svgPaths.p21226040} fill="var(--fill-0, #CFDDE0)" id="XMLID_148_" />
            <path d={svgPaths.p2ad45700} fill="var(--fill-0, #CFDDE0)" id="XMLID_147_" />
            <path d={svgPaths.p3c61bdb0} fill="var(--fill-0, #CFDDE0)" id="XMLID_146_" />
            <path d={svgPaths.p14286d80} fill="var(--fill-0, #CFDDE0)" id="XMLID_145_" />
            <path d={svgPaths.p26221e00} fill="var(--fill-0, #CFDDE0)" id="XMLID_144_" />
            <path d={svgPaths.p3edf4e00} fill="var(--fill-0, #CFDDE0)" id="XMLID_143_" />
            <path d={svgPaths.p3332a6c0} fill="var(--fill-0, #CFDDE0)" id="XMLID_142_" />
            <path d={svgPaths.p39d22700} fill="var(--fill-0, #CFDDE0)" id="XMLID_141_" />
            <path d={svgPaths.p22529f00} fill="var(--fill-0, #CFDDE0)" id="XMLID_140_" />
            <path d={svgPaths.p3b7fd80} fill="var(--fill-0, #CFDDE0)" id="XMLID_139_" />
            <path d={svgPaths.p17094900} fill="var(--fill-0, #CFDDE0)" id="XMLID_138_" />
            <path d={svgPaths.p35cbab00} fill="var(--fill-0, #CFDDE0)" id="XMLID_137_" />
            <path d={svgPaths.p1585adf0} fill="var(--fill-0, #CFDDE0)" id="XMLID_136_" />
            <path d={svgPaths.p28535880} fill="var(--fill-0, #CFDDE0)" id="XMLID_135_" />
            <path d={svgPaths.p3c511c00} fill="var(--fill-0, #CFDDE0)" id="XMLID_134_" />
            <path d={svgPaths.p3cb3f480} fill="var(--fill-0, #CFDDE0)" id="XMLID_133_" />
          </g>
          <g id="XMLID_303_">
            <path d={svgPaths.p38a20a00} fill="var(--fill-0, #FE110D)" id="XMLID_132_" />
            <path d={svgPaths.p2974cd00} fill="var(--fill-0, #FE110D)" id="XMLID_131_" />
            <path d={svgPaths.p13308100} fill="var(--fill-0, #FE110D)" id="XMLID_130_" />
            <path d={svgPaths.p7b85700} fill="var(--fill-0, #FE110D)" id="XMLID_129_" />
            <path d={svgPaths.p3200f1d0} fill="var(--fill-0, #FE110D)" id="XMLID_128_" />
            <path d={svgPaths.p37ec7740} fill="var(--fill-0, #FE110D)" id="XMLID_127_" />
            <path d={svgPaths.p3c947b00} fill="var(--fill-0, #FE110D)" id="XMLID_126_" />
            <path d={svgPaths.p23573d80} fill="var(--fill-0, #FE110D)" id="XMLID_125_" />
            <path d={svgPaths.p33bc8300} fill="var(--fill-0, #FE110D)" id="XMLID_124_" />
            <path d={svgPaths.p37674600} fill="var(--fill-0, #FE110D)" id="XMLID_123_" />
            <path d={svgPaths.p3b58c80} fill="var(--fill-0, #FE110D)" id="XMLID_122_" />
            <path d={svgPaths.p209abe80} fill="var(--fill-0, #FE110D)" id="XMLID_121_" />
            <path d={svgPaths.p18dd9a00} fill="var(--fill-0, #FE110D)" id="XMLID_120_" />
            <path d={svgPaths.p124eb8c0} fill="var(--fill-0, #FE110D)" id="XMLID_119_" />
            <path d={svgPaths.p1ed5e200} fill="var(--fill-0, #FE110D)" id="XMLID_118_" />
            <path d={svgPaths.p29000a00} fill="var(--fill-0, #FE110D)" id="XMLID_117_" />
            <path d={svgPaths.p9660980} fill="var(--fill-0, #FE110D)" id="XMLID_116_" />
            <path d={svgPaths.p27f7ee00} fill="var(--fill-0, #FE110D)" id="XMLID_115_" />
            <path d={svgPaths.p18c16900} fill="var(--fill-0, #FE110D)" id="XMLID_114_" />
            <path d={svgPaths.pf788f00} fill="var(--fill-0, #FE110D)" id="XMLID_113_" />
            <path d={svgPaths.p1dd68570} fill="var(--fill-0, #FE110D)" id="XMLID_112_" />
            <path d={svgPaths.p3febd980} fill="var(--fill-0, #FE110D)" id="XMLID_111_" />
            <path d={svgPaths.p34908700} fill="var(--fill-0, #FE110D)" id="XMLID_110_" />
          </g>
          <g id="XMLID_272_">
            <path d={svgPaths.p29b5a680} fill="var(--fill-0, #35A1C9)" id="XMLID_109_" />
            <path d={svgPaths.p2d8db800} fill="var(--fill-0, #35A1C9)" id="XMLID_108_" />
            <path d={svgPaths.p1651fd00} fill="var(--fill-0, #35A1C9)" id="XMLID_107_" />
            <path d={svgPaths.p6a6d280} fill="var(--fill-0, #35A1C9)" id="XMLID_106_" />
            <path d={svgPaths.p18df33f0} fill="var(--fill-0, #35A1C9)" id="XMLID_105_" />
            <path d={svgPaths.p3736b780} fill="var(--fill-0, #35A1C9)" id="XMLID_104_" />
            <path d={svgPaths.p25fdf900} fill="var(--fill-0, #35A1C9)" id="XMLID_103_" />
            <path d={svgPaths.p21fd3d00} fill="var(--fill-0, #35A1C9)" id="XMLID_102_" />
            <path d={svgPaths.pb607380} fill="var(--fill-0, #35A1C9)" id="XMLID_101_" />
            <path d={svgPaths.p12361f0} fill="var(--fill-0, #35A1C9)" id="XMLID_100_" />
            <path d={svgPaths.p2254fd00} fill="var(--fill-0, #35A1C9)" id="XMLID_99_" />
            <path d={svgPaths.p25832000} fill="var(--fill-0, #35A1C9)" id="XMLID_98_" />
            <path d={svgPaths.p2954c7c0} fill="var(--fill-0, #35A1C9)" id="XMLID_97_" />
            <path d={svgPaths.p104e6c30} fill="var(--fill-0, #35A1C9)" id="XMLID_96_" />
            <path d={svgPaths.p381ce400} fill="var(--fill-0, #35A1C9)" id="XMLID_95_" />
            <path d={svgPaths.p31693300} fill="var(--fill-0, #35A1C9)" id="XMLID_94_" />
            <path d={svgPaths.p2119db00} fill="var(--fill-0, #35A1C9)" id="XMLID_93_" />
            <path d={svgPaths.p2ca5b380} fill="var(--fill-0, #35A1C9)" id="XMLID_92_" />
            <path d={svgPaths.p5960440} fill="var(--fill-0, #35A1C9)" id="XMLID_91_" />
            <path d={svgPaths.pd656a00} fill="var(--fill-0, #35A1C9)" id="XMLID_90_" />
            <path d={svgPaths.p16ac10c0} fill="var(--fill-0, #35A1C9)" id="XMLID_89_" />
            <path d={svgPaths.p3ac3f500} fill="var(--fill-0, #35A1C9)" id="XMLID_88_" />
            <path d={svgPaths.p1154b700} fill="var(--fill-0, #35A1C9)" id="XMLID_87_" />
            <path d={svgPaths.p9c37f00} fill="var(--fill-0, #35A1C9)" id="XMLID_86_" />
            <path d={svgPaths.p395a7900} fill="var(--fill-0, #35A1C9)" id="XMLID_85_" />
            <path d={svgPaths.p3f53d880} fill="var(--fill-0, #35A1C9)" id="XMLID_84_" />
            <path d={svgPaths.p11d83100} fill="var(--fill-0, #35A1C9)" id="XMLID_83_" />
            <path d={svgPaths.p347c2b00} fill="var(--fill-0, #35A1C9)" id="XMLID_82_" />
            <path d={svgPaths.p39b05300} fill="var(--fill-0, #35A1C9)" id="XMLID_81_" />
            <path d={svgPaths.p29c04380} fill="var(--fill-0, #35A1C9)" id="XMLID_80_" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Xmlid3() {
  return (
    <div className="section-footer__xmlid-3" data-name="XMLID_270_">
      <Xmlid5 />
      <Xmlid4 />
    </div>
  );
}

function Xmlid2() {
  return (
    <div className="section-footer__xmlid-wrap-2" data-name="XMLID_269_">
      <div className="section-footer__xmlid-2-inner" data-name="XMLID_176_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3155 35.0376">
          <path d={svgPaths.p14e557c0} fill="var(--fill-0, #8DD2E4)" id="XMLID_176_" />
        </svg>
      </div>
      <Xmlid3 />
    </div>
  );
}

function Xmlid1() {
  return (
    <div className="section-footer__xmlid-1" data-name="XMLID_227_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.421 14.5715">
        <g id="XMLID_227_">
          <path d={svgPaths.p33acf5c0} fill="var(--fill-0, #888888)" id="XMLID_265_" />
          <path d={svgPaths.pa860000} fill="var(--fill-0, #888888)" id="XMLID_260_" />
          <path d={svgPaths.p27101900} fill="var(--fill-0, #888888)" id="XMLID_257_" />
          <path d={svgPaths.p909db00} fill="var(--fill-0, #888888)" id="XMLID_250_" />
          <path d={svgPaths.p2e4d7800} fill="var(--fill-0, #888888)" id="XMLID_245_" />
          <path d={svgPaths.p1632d700} fill="var(--fill-0, #888888)" id="XMLID_242_" />
          <path d={svgPaths.p2d91a600} fill="var(--fill-0, #888888)" id="XMLID_237_" />
          <path d={svgPaths.p2e62b00} fill="var(--fill-0, #888888)" id="XMLID_234_" />
          <path d={svgPaths.p17a3ae00} fill="var(--fill-0, #888888)" id="XMLID_228_" />
        </g>
      </svg>
    </div>
  );
}

function Xmlid() {
  return (
    <div className="section-footer__xmlid-contents" data-name="XMLID_178_">
      <Xmlid2 />
      <Xmlid1 />
      <div className="section-footer__xmlid-line" data-name="XMLID_179_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.121 3.86843">
          <path clipRule="evenodd" d={svgPaths.p1ca13b00} fill="var(--fill-0, #808080)" fillRule="evenodd" id="XMLID_179_" />
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="section-footer__logo" data-name="logo 2">
      <img alt="" src={imgHealthInsurance} />
    </div>
  );
}

function Badge() {
  return (
    <div className="section-footer__badge" data-name="badge">
      <Icon />
      <Logo />
    </div>
  );
}

function Bottom() {
  return (
    <div className="section-footer__bottom-row" data-name="bottom">
      <Info />
      <div className="section-footer__bottom-right">
        <Badge />
        <Icons />        
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="section-footer__content" data-name="content">
      <Menu />
      <Bottom />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="section-footer__bottom" data-name="footer-bottom">
      <Content />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="section-footer__mask-bg" data-name="Background image 2" style={{ maskImage: `url('${imgBackgroundImage2}')` }}>
      <div aria-hidden="true" className="section-footer__mask-inner">
        <div className="section-footer__mask-base" />
        <img alt="" className="section-footer__mask-img" src={imgBackgroundImage3} />
        <div className="section-footer__mask-overlay" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="section-footer__hero-heading">
      <div className="section-footer__hero-title-wrap">
        <p>병원안내</p>
      </div>
      <div className="section-footer__hero-title">
        <p>의업 외길 60여년,</p>
        <p>꿈꾸는 미즈메디 </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="section-footer__hero-cta-wrap">
      <Frame8 />
      <div className="section-footer__hero-desc">
        <p>본질을 향한 정직한 발걸음이 이어져</p>
        <p>미래를 향해 나아갑니다.</p>
      </div>
    </div>
  );
}

function GrommetIconsFormNext() {
  return (
    <div className="section-footer__btn-arrow" data-name="grommet-icons:form-next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 22">
        <g clipPath="url(#clip0_1_328)" id="grommet-icons:form-next">
          <rect fill="#007A8C" height="22" width="12" />
          <path d="M5.5 5.5L11 11L5.5 16.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_328">
            <rect fill="white" height="22" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="section-footer__btn-label">
      <p>미즈메디 소개</p>
    </div>
  );
}

function Btn() {
  return (
    <div className="section-footer__btn" data-name="btn">
      <div className="section-footer__btn-bg" />
      <GrommetIconsFormNext />
      <Group1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="section-footer__hero-left">
      <Frame9 />
      <Btn />
    </div>
  );
}

function Group6() {
  return (
    <div className="section-footer__floor-labels">
      <div className="section-footer__floor-label-title">
        <p>본관</p>
      </div>
      <div className="section-footer__floor-label-desc">
        <p>분만실 / 수술실 / 입원실 / 신생아실 / 산부인과 / 내과 / 영상의학과</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="section-footer__floor-guide">
      <div className="section-footer__floor-img-wrap" data-name="guide_floor02 2">
        <div className="section-footer__floor-img-inner">
          <img alt="" src={imgGuideFloor022} />
        </div>
      </div>
      <Group6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="section-footer__hero-row">
      <Frame10 />
      <Group9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="section-footer__hero-block">
      <Frame11 />
      <div className="section-footer__divider-line">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 1">
          <line id="Line 11" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x2="1360" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="section-footer__sns-item-inner" data-name="_寃⑸━_紐⑤뱶">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2703 24">
        <g clipPath="url(#clip0_1_306)" id="_å¯â¸â_ï§â¤ë±¶">
          <path d={svgPaths.p295a52c0} fill="var(--fill-0, white)" id="Exclude" />
        </g>
        <defs>
          <clipPath id="clip0_1_306">
            <rect fill="white" height="24" width="26.2703" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SnsDefaultStyle4() {
  return (
    <div className="section-footer__sns-item" data-name="sns_Default/style14">
      <Component1 />
    </div>
  );
}

function SnsDefaultStyle5() {
  return (
    <div className="section-footer__sns-item" data-name="sns_Default/style14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="jt-naver blog">
          <path d={svgPaths.p111e47f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p23c0180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p253ea600} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p300b0d00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function SnsDefaultStyle6() {
  return (
    <div className="section-footer__sns-item" data-name="sns_Default/style14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="jt-instagram">
          <path d={svgPaths.p11f8f000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p24ed5f00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="section-footer__group-inner" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3281 20.6612">
        <g id="Group">
          <path d={svgPaths.p3273f00} fill="var(--fill-0, white)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="section-footer__sns-item" data-name="youtube">
      <Group />
    </div>
  );
}

function Group7() {
  return (
    <div className="section-footer__sns-wrap">
      <SnsDefaultStyle4 />
      <SnsDefaultStyle5 />
      <SnsDefaultStyle6 />
      <Youtube />
    </div>
  );
}

function Component2() {
  return (
    <div className="section-footer__quick-icon" data-name="의료질성과관리">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ìë£ì§ì±ê³¼ê´ë¦¬">
          <g id="Group 1000003559">
            <path d="M3.5 13.0002L3.5 11.373" id="Vector 69" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
            <path d="M8 12.9997L8 9.49805" id="Vector 70" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
            <path d="M12.5 13L12.5 7.49805" id="Vector 71" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
          </g>
          <path d={svgPaths.p29adf780} id="Rectangle 34626258" stroke="var(--stroke-0, white)" strokeWidth="1.3" />
          <path d="M11.8438 1.7793L3.25 8" id="Vector 72" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="section-footer__quick-item-inner">
      <Component2 />
      <div className="section-footer__quick-label">
        <p>의료질 성과관리</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="section-footer__quick-item section-footer__quick-item--1">      
      <Frame5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="section-footer__quick-row">
      <Frame2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="section-footer__quick-icon-inner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.71582 10.9103">
        <g id="Group 1000003494">
          <path d={svgPaths.p14ba5600} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="section-footer__quick-icon section-footer__quick-icon--transparent" data-name="오시는길">
      <Group2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="section-footer__quick-item-inner">
      <Component3 />
      <div className="section-footer__quick-label">
        <p>오시는 길</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="section-footer__quick-item">
      <Frame6 />
    </div>
  );
}

function CiPhone() {
  return (
    <div className="section-footer__quick-icon" data-name="ci:phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ci:phone">
          <path d={svgPaths.p2a790900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="section-footer__quick-item-inner">
      <CiPhone />
      <div className="section-footer__quick-label">
        <p>주요 전화번호</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="section-footer__quick-item">
      <Frame7 />
    </div>
  );
}

function Group5() {
  return (
    <div className="section-footer__quick-row">
      <Frame4 />
    </div>
  );
}

function Group8() {
  return (
    <div className="section-footer__quick-wrap">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="section-footer__quick-row">
      <Frame3 />
    </div>
  );
}

function Group10() {
  return (
    <div className="section-footer__sns-row">
      <Group7 />
      <Group8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="section-footer__main">
      <Frame12 />
      <Group10 />
    </div>
  );
}

function FooterTop() {
  return (
    <div className="section-footer__top" data-name="footer-top">
      <Frame13 />
    </div>
  );
}

function Background() {
  return (
    <div className="section-footer__background" data-name="Background 2">
      
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

function Container() {
  return (
    <div className="section-footer__container" data-name="Container 2">
      <Background />
    </div>
  );
}

function SectionFooter1() {
  return (
    <div className="section-footer__container" data-name="section-footer">
      <Container />
    </div>
  );
}

export function MizmediFooter() {
  return (
    <div className="section-footer" data-name="Section/Footer">
      <SectionFooter1 />
    </div>
  );
}

export { MizmediFooter as Footer };
