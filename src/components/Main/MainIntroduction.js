import React from "react";

import classes from "./MainIntroduction.module.css";
import activity8 from "../../assets/activity8.jpg";
import activity2 from "../../assets/activity2.jpg";
import activity3 from "../../assets/activity3.jpg";
import activity5 from "../../assets/activity5.jpg";
import info2 from "../../assets/info2.jpg";

const MainIntroduction = () => {
    return (
        <div className={classes.intro_container}>
            <div className={classes.intro_title}>
                <img src={activity8} alt="activity" />
                <div className={classes.intro_title_inner}>
                    <h1>동아리 소개</h1>        
                    <p>Pan's PM은 조선대학교의 유서깊은 밴드동아리입니다.</p>
                </div>
            </div>
            <div className={classes.intro_main}>
                <h2>안녕하세요!</h2>
                <div className={classes.intro_main_box}>
                    <div className={classes.intro_main_pic}>
                        <img src={info2} alt="activity" />
                    </div>
                    <div className={classes.intro_main_description}>
                        <h3>동아리 창단이야기</h3>
                        <p>
                            Pan's PM은 조선대학교 본관이 공사중일 때부터
                            1기 선배님들의 동아리 창단 의지에 힘입어
                            총동아리연합회 소속 밴드동아리로 창단된 동아리입니다.
                        </p>
                    </div>
                </div>
                <div className={classes.intro_main_box}>
                    <div className={classes.intro_main_description}>
                        <h3>즐거움을 중시하는 동아리</h3>
                        <p>
                            Pan's PM은 음악을 즐기고 싶어 만들어진 동아리입니다.
                            실력도 중요하지만, 더 중요한 건 활동의 즐거움입니다.
                            동아리를 즐길 수 있을 때 동아리의 참모습이 나타납니다.
                        </p>
                    </div>
                    <div className={classes.intro_main_pic}>
                        <img src={activity3} alt="activity" />
                    </div>
                </div>
                <div className={classes.intro_main_box}>
                    <div className={classes.intro_main_pic}>
                        <img src={activity2} alt="activity" />
                    </div>
                    <div className={classes.intro_main_description}>
                        <h3>멤버간의 돈독한 관계</h3>
                        <p>
                            동아리에서 음악을 즐기며 신입, 현역생활을 즐기고 나면
                            멤버간에 관계가 깊어졌음을 느낄 수 있습니다.
                            이는 동아리의 순기능이며, 현역 이후 OB가 됐을 때도
                            여행, 개별모임 등을 통해 더욱 깊어지는 Pan's PM만의
                            매력을 느낄 수 있습니다.
                        </p>
                    </div>
                </div>
                <div className={classes.intro_main_box}>
                    <div className={classes.intro_main_description}>
                        <h3>장르를 가리지 않는 음악활동</h3>
                        <p>
                            Pan's PM은 본래 락밴드 동아리로 시작했으나
                            현재는 락뿐만 아니라 다양한 음악을 하고 있습니다.
                            어쿠스틱음악, 펑크, 메탈 등 장르에 구애받지 않고
                            여러분이 즐기고 싶은 음악을 할 수 있는 환경에서
                            마음껏 뽐내고 남다른 대학생활을 즐겨보세요! 
                        </p>
                    </div>
                    <div className={classes.intro_main_pic}>
                        <img src={activity5} alt="activity" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MainIntroduction;