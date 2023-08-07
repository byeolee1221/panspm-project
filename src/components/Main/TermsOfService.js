import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./TermsOfService.module.css";

const TermsOfService = () => {
    return (
        <Fragment>
            <div className={classes.termsOfService_container}>
                <div className={classes.termsOfService_header}>
                    <h1>LEGAL</h1>
                    <p>마지막 업데이트 2023.07.17</p>
                    <nav className={classes.header_nav}>
                        <ul className={classes.nav_list}>
                            <li>
                                <NavLink to="/termsOfService" className={({ isActive }) => isActive ? classes.active : undefined}>서비스 이용약관</NavLink>
                            </li>
                            <li>
                                <NavLink to="/privacyTerms" className={({ isActive }) => isActive ? classes.active : undefined}>개인정보 처리방침</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.termsOfService_main}>
                    <div className={classes.main_description}>
                        <h2>제1조 (목적)</h2>
                        <p>
                            본 약관은 조선대학교 밴드동아리 PAN'S PM (이하 "PAN'S PM"라 합니다)이 운영하는 PAN'S PM 사이트(이하 "사이트"라 합니다)를 통해 서비스를
                            제공함에 있어 동아리와 이용자의 이용조건 및 제반 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
                        </p>
                        <p>본 약관에서 사용하는 용어의 정의는 아래와 같습니다.</p>
                        <p>
                            ① "사이트"라 함은 동아리가 서비스를 이용자에게 제공하기 위하여 제작, 운영하는 사이트를 말합니다. 현재 동아리가 운영하는 사이트의 접속 주소는 
                            아래와 같습니다.
                        </p>
                        <ul className={classes.termsOfService_list}>
                            <li><Link to="/" className={classes.list_link}>localhost:3000</Link></li>
                        </ul>
                        <p>
                            ② "서비스"라 함은 PAN'S PM의 온라인 활동영역을 넓히고, 새롭게 가입하려는 멤버들의 동아리 접근성을 높이는 서비스입니다. 서비스는 원칙적으로 
                            개인회원에게 무료로 제공됩니다.
                        </p>
                        <p>
                            ③ "이용자"라 함은 사이트가 제공하는 서비스를 이용하는 개인회원 및 비회원을 말합니다.
                        </p>
                        <p>
                            ④ "회원"이라 함은 본 서비스를 이용하기 위하여 본 약관에 동의하고 PAN'S PM과 서비스 이용계약을 체결하여 회원ID를 부여받은 이용자를 말합니다.
                        </p>
                        <p>
                            ⑤ "비회원"이라 함은 PAN'S PM과 서비스 이용계약을 체결하지 않은 채 사이트 등을 통하여 PAN'S PM이 제공하는 서비스를 이용하는 이용자를 말합니다.
                        </p>
                        <p>
                            ⑥ "서비스 이용계약"이라 함은 PAN'S PM이 개인회원을 위해 제공하는 서비스를 계속적으로 이용하기 위하여 PAN'S PM과 이용자 사이에 체결되는 계약을
                            말합니다.
                        </p>
                        <p>
                            ⑦ "ID"라 함은 개인회원의 식별 및 서비스 이용을 위하여 개인회원이 선정하거나 PAN'S PM이 부여하는 문자와 숫자의 조합을 말합니다.
                        </p>
                        <p>
                            ⑧ "비밀번호"라 함은 PAN'S PM의 서비스를 이용하려는 사람이 개인회원ID를 부여 받은 자와 동일인임을 확인하고, 회원의 권익을 보호하기 위하여
                            회원이 선정하거나 PAN'S PM이 부여하는 문자와 숫자의 조합을 말합니다.
                        </p>
                        <p>
                            ⑨ "계정"이라 함은 회원의 개인정보, 가입원서 등을 등록, 관리할 수 있도록 PAN'S PM이 회원에게 제공하는 공간을 말합니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제2조 (약관의 명시와 개정)</h2>
                        <p>
                            ① PAN'S PM은 본 약관의 내용과 상호, 동아리 소재지, 연락처 등을 이용자가 알 수 있도록 초기 화면에 게시하거나 기타의 방법으로 이용자에게 공지합니다.
                            약관의 내용은 사이트 등의 링크를 통한 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                        </p>
                        <p>
                            ② PAN'S PM은 약관의 규제 등에 관한 법률, 전기통신기본법, 정보통신망 이용 촉진 및 정보보호 등에 관한 법률 등 관련법을 위배하지 않는
                            범위에서 본 약관을 개정할 수 있습니다.
                        </p>
                        <p>
                            ③ PAN'S PM이 약관을 개정할 경우에는 개정 약관 적용일 최소 7일전(약관의 변경이 개인회원에게 불리한 경우에는 30일전)부터 웹사이트 초기화면에 공지사항 팝업
                            또는 이메일을 통해 사전 공지합니다.
                        </p>
                        <p>
                            ④ 회원은 변경된 약관에 거부할 권리가 있으며, 변경된 약관이 공지된 지 15일 이내에 변경 약관에 대한 거부 의사를 표시할 수 있습니다.
                            만약, 회원이 거부 의사를 표시하지 않고 서비스를 계속 이용하는 경우, PAN'S PM은 회원이 변경 약관 적용에 동의하는 것으로 봅니다.
                        </p>
                        <p>
                            ⑤ 회원이 제4항에 따라 변경 약관 적용을 거부할 의사를 표시한 경우, PAN'S PM은 회원에게 15일간의 기간을 정하여 사전 통지 후 해당 개인회원과의
                            서비스 이용계약 또는 별도로 체결된 계약을 해지할 수 있습니다.
                        </p>
                        <p>
                            ⑥ 약관에서 규정하지 않은 사항에 관해서는 약관의 규제 등에 관한 법률, 정보통신망 이용 촉진 및 정보보호 등에 관한 법률, 개인정보 보호법,
                            전기통신기본법, 전기통신사업법 등의 관계법령에 따라 규율됩니다.
                        </p>
                        <p>
                            ⑦ 회원이 PAN'S PM과 개별 계약을 체결하여 서비스를 이용하는 경우, 회원의 서비스 이용과 관련된 권리 의무는 순차적으로 개별 계약, 개별 서비스 이용약관,
                            본 약관에서 정한 내용에 따라 규율됩니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제3조 (회원에 대한 고지, 통지 및 공지)</h2>
                        <p>
                            PAN'S PM은 회원에게 서비스 정책, 이용약관, 개인정보처리방침 등 일체의 약관, 서비스 이용 관련 일정한 사항이나 정보를 알리거나 안내할 목적으로
                            개인회원에게 각종 고지나 통지를 이행할 수 있으며, 사이트 등의 게시판이나 화면에 일정한 사항을 게시하여 공지함으로써 각 개인회원에 대한 각종
                            고지나 통지를 갈음할 수 있습니다. 이와 관련하여 고지·통지 수단, 공지 방법, 공지 기간 등의 상세한 내용은 개인정보처리방침을 확인바랍니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제4조 (서비스 이용계약의 성립)</h2>
                        <p>
                            ① PAN'S PM의 서비스 이용계약(이하 "이용계약")은 서비스를 이용하고자 하는 본 서비스 약관과 개인정보처리방침을 읽고 약관에 동의한 것으로 간주합니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제5조 (회원가입 신청의 승낙과 제한)</h2>
                        <p>
                            ① PAN'S PM은 전조의 규정에 의한 이용신청 고객에 대하여 업무수행상 또는 기술상 지장이 없는 경우에는 원칙적으로 접수순서에 따라 서비스 이용을 승낙합니다.
                        </p>
                        <p>
                            ② PAN'S PM은 다음 각 호에 해당하는 경우에 대해서는 서비스 이용을 승낙하지 아니합니다.
                        </p>
                        <ol className={classes.termsOfService_list}>
                            <li>실명이 아니거나 타인의 명의를 이용하여 신청한 경우</li>
                            <li>이용계약 신청서의 내용을 허위로 기재하거나 PAN'S PM이 제시하는 내용을 기재하지 않은 경우</li>
                            <li>이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반사항을 위반하여 신청하는 경우</li>
                        </ol>
                        <p>
                            ③ PAN'S PM은 다음 각 호에 해당하는 경우에는 그 신청에 대하여 승낙제한 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
                        </p>
                        <ol className={classes.termsOfService_list}>
                            <li>PAN'S PM의 설비의 여유가 없는 경우</li>
                            <li>PAN'S PM의 기술상 지장이 있는 경우</li>
                            <li>기타 PAN'S PM의 귀책사유로 이용승낙이 곤란한 경우</li>
                        </ol>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제6조 (서비스의 내용)</h2>
                        <p>① PAN'S PM이 제공하는 서비스의 내용은 다음 각 호와 같습니다.</p>
                        <ol className={classes.termsOfService_list}>
                            <li>PAN'S PM 웹사이트 서비스</li>
                            <li>동아리에 가입하고자 하는 고객에 대한 온라인 가입원서 제공 서비스</li>
                            <li>PAN'S PM의 모든 온라인 커뮤니티 소개 서비스</li>
                        </ol>
                        <p>
                            ② PAN'S PM은 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있습니다. 다만, 서비스의 내용의 추가 또는 변경으로 인하여 개인회원의
                            권리·의무에 중요한 영향을 미치는 경우, PAN'S PM은 추가 또는 변경된 서비스 내용을 그 적용일로부터 30일 전에 공지합니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제7조 (서비스 이용기간 및 제공 중지)</h2>
                        <p>
                            ① PAN'S PM은 특별한 사유가 없는 한 연중무휴, 1일 24시간 서비스를 제공합니다. 다만, 일부 서비스의 경우 그 종류나 성질을 고려하여
                            별도로 이용시간을 정할 수 있으며, PAN'S PM은 그 이용 시간을 이용자에게 사전 공지합니다.
                        </p>
                        <p>
                            ② PAN'S PM은 서비스 개선을 위한 시스템 업데이트 기타 유지보수 작업 등을 진행하고자 하는 경우, 사전에 서비스 중단 시간과 작업 내용을
                            고지하여 일시적 서비스 중단을 시행할 수 있습니다.
                        </p>
                        <p>
                            ③ PAN'S PM의 성실한 의무 이행에도 불구하고 다음 각 호의 사유로 서비스 중지 등 회원의 손해가 발생한 경우, PAN'S PM은 그로 인한
                            책임을 부담하지 않습니다.
                        </p>
                        <ol className={classes.termsOfService_list}>
                            <li>천재지변 또는 이에 준하는 불가항력으로 인한 손해</li>
                            <li>회원의 귀책으로 발생한 손해</li>
                            <li>제3자의 고의 또는 과실로 발생한 손해</li>
                            <li>기타 PAN'S PM의 고의 또는 과실 없이 발생한 손해</li>
                        </ol>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제8조 (게시물 등 작성에 따른 책임과 PAN'S PM의 정보 수정·삭제 권한)</h2>
                        <p>① 게시물 등은 회원이 사이트에 등록한 게시물을 말합니다.</p>
                        <p>
                            ② 이용자는 게시물을 사실에 기반하여 진실하고 성실하게 작성하여야 하며, 만일 내용이 사실이 아니거나 부정확하게 작성되어 발생하는
                            모든 책임은 전적으로 당해 게시물을 등록한 회원에게 있습니다. PAN'S PM은 회원이 작성한 게시물 등의 정확성 및 진실성을 보증하지 않으며,
                            게시물에 대한 일체의 책임을 부담하지 않습니다.
                        </p>
                        <p>
                            ③ 모든 게시물 등의 작성 및 관리는 당해 게시물 등을 작성한 이용자가 하는 것이 원칙입니다. 이용자의 사정상 위탁 또는 대행관리를 하더라도
                            게시물 등 작성의 책임은 이용자에게 있고, 주기적으로 자신의 자료를 확인하여 항상 정확성을 유지하도록 관리해야 합니다.
                        </p>
                        <p>
                            ④ PAN'S PM은 회원이 작성한 콘텐츠가 다음 각 호에 해당한다고 판단되는 경우, 이를 삭제하거나 게시를 거부할 수 있습니다.
                        </p>
                        <ol className={classes.termsOfService_list}>
                            <li>음란 게시물</li>
                            <li>청소년에게 유해한 게시물</li>
                            <li>차별·갈등을 조장하는 게시물</li>
                            <li>도배 광고 또는 홍보 스팸성 게시물</li>
                            <li>계정의 양도나 거래를 내용으로 하는 게시물</li>
                            <li>타인을 사칭하는 게시물</li>
                            <li>기타 법령에 위반되거나 그에 준하는 게시물</li>
                        </ol>
                        <p>
                            ⑤ 회원이 등록한 게시물 등으로 인해 제3자로부터 허위사실 또는 명예훼손 등을 이유로 삭제 요청이 접수된 경우 또는 회원이 등록한 게시물 등으로
                            인하여 사이트 등의 원활한 운영에 영향을 미친다고 판단되는 경우, PAN'S PM은 이용자의 해당 게시물 등을 직권으로 삭제할 수 있으며,
                            개인회원에게 해당 게시물 등의 삭제 사실 및 사유를 추후 통지할 수 있습니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제9조 (PAN'S PM의 의무)</h2>
                        <p>
                            ① PAN'S PM은 본 약관에서 정한 내용에 따라 안정적·계속적으로 서비스를 제공할 수 있도록 최선을 다하여 노력합니다.
                        </p>
                        <p>
                            ② 서비스의 이용이나 운영과 관련된 이용자의 불만사항이 접수되는 경우, PAN'S PM은 이를 지체없이 처리하여 그 결과를 회신할 수 있도록 노력합니다.
                            다만, 불만사항 내용 확인 및 경위 파악, 접수 내용 처리 등에 상당한 시간이 소요될 경우, PAN'S PM은 그 사유와 처리일정을 개인회원에게 통지합니다.
                        </p>
                        <p>
                            ③ PAN'S PM은 천재지변 등 예측하지 못한 일이 발생하거나 시스템의 장애가 발생하여 서비스가 중단될 경우 이에 대한 손해에 대해서는 책임을 지지 않습니다.
                            다만, 자료의 복구나 정상적인 서비스 지원이 되도록 최선을 다할 의무를 부담합니다.
                        </p>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제10조 (개인회원의 의무)</h2>
                        <p>
                            ① 회원은 관계법령과 본 약관의 규정 및 기타 PAN'S PM이 통지하는 사항을 준수하여야 하며, 기타 PAN'S PM의 업무에 방해되는 행위를 해서는 안 됩니다.
                        </p>
                        <p>
                            ② 회원은 서비스를 이용하여 얻은 정보를 PAN'S PM의 사전동의 없이 복사, 복제, 번역, 출판, 방송, 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.
                        </p>
                        <p>
                            ③ 회원은 본 서비스를 건전한 동아리커뮤니티 활동 및 가입 이외의 목적으로 사용해서는 안 되며, 이용 중 다음 각 호의 행위를 해서는 안 됩니다.
                        </p>
                        <ol className={classes.termsOfService_list}>
                            <li>다른 회원의 아이디를 부정 사용하는 행위</li>
                            <li>범죄행위를 목적으로 하거나 기타 범죄 행위와 관련된 행위</li>
                            <li>타인의 명예를 훼손하거나 모욕하는 행위</li>
                            <li>타인의 지적재산권 등의 권리를 침해하는 행위</li>
                            <li>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</li>
                            <li>서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있다고 판단되는 행위</li>
                            <li>사이트의 정보 및 서비스를 이용한 영리 행위</li>
                            <li>그 밖에 기타 사회질서를 해하거나 관계법령에 위반하는 행위</li>
                        </ol>
                        <p>
                            (회원의 가입해지 / 서비스 중지 / 자료 삭제)
                        </p>
                        <p>
                            ① 회원은 언제든지 회원탈퇴를 위해 회원탈퇴 메뉴 등을 통하여 이용계약 해지 신청을 할 수 있으며, PAN'S PM은 관련법 등이 정하는 바에 따라 이를 처리합니다.
                        </p>
                        <p>
                            ② 다음의 사항에 해당하는 경우 PAN'S PM은 사전 동의 없이 가입하거나 서비스 중지 등의 조치를 취할 수 있습니다.
                        </p>
                        <ol className={classes.termsOfService_list}>
                            <li>회원의 의무를 성실하게 이행하지 않았을 때</li>
                            <li>본 서비스 목적에 맞지 않는 분야의 정보를 활용하여 사회적 물의가 발생한 때</li>
                            <li>회원이 등록한 정보의 내용이 사실과 다르거나 조작되었을 때</li>
                            <li>본 서비스와 관련하여 PAN'S PM 또는 제3자의 명예를 훼손하였을 때</li>
                            <li>기타 위 각 호에 준하는 사유가 발생하였을 때</li>
                        </ol>
                    </div>
                    <div className={classes.main_description}>
                        <h2>제11조 (손해복구 및 면책)</h2>
                        <p>
                            ① PAN'S PM이 본 약관의 제7조 규정에 위반한 행위로 개인회원에게 손해를 입히거나 기타 PAN'S PM이 제공하는 모든 서비스와 관련하여 PAN'S PM의 
                            책임 있는 사유로 인해 개인회원에게 손해가 발생한 경우, PAN'S PM은 적절한 방법으로 그 손해를 복구해야 합니다.
                        </p>
                        <p>
                            ② PAN'S PM은 무료로 제공하는 서비스의 이용과 관련하여 개인정보처리방침에서 정하는 내용에 위반하지 않은 한 이용자에게 어떠한 손해도 책임지지 않습니다.
                        </p>
                        <p>
                            ③ PAN'S PM은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 서비스 제공에 관한 책임이 면제됩니다.
                        </p>
                        <p>
                            ④ PAN'S PM은 서비스 이용과 관련하여 개인회원에게 발생한 손해 가운데 이용자의 고의 또는 과실로 인한 서비스 이용의 장애 및 손해에 대하여
                            어떠한 책임도 부담하지 않습니다.
                        </p>
                    </div>
                    <div className={classes.main_description} id={classes.description_final}>
                        <h2>제12조 (재판권 및 준거법)</h2>
                        <p>
                            ① 서비스 이용에 관한 분쟁은 PAN'S PM과 회원간의 합의에 의해 원만히 해결하여야 합니다.
                        </p>
                        <p>
                            ② 본 약관에 정한 사항에 관하여 소송이 제기될 경우 민사소송법 등 관련 법령에 따른 법원을 관할법원으로 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default TermsOfService;