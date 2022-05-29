const Resume = () => {
  return (
    <div className="flex flex-col container mx-auto px-24 py-20 justify-center">
      <div className="text-2xl font-bold mb-8">기술 이력서</div>
      <div className="mb-4">
        <div className="text-xl font-bold mb-2">
          프론트엔드 엔지니어 정혜경입니다.
        </div>
        <div>
          3년차 프론트엔드 엔지니어입니다. 협업으로 프로젝트를 완성시켜나가는
          일을 좋아합니다. 사용자가 사용하는데 편리하고 합리적인 화면을 만드는
          것이 좋습니다.
        </div>
      </div>

      <div className="mb-8 text-sm">
        <div>
          <span className="mr-4">연락처</span>
          <span>010-0000-0000</span>
        </div>
        <div>
          <span className="mr-4">이메일</span>
          <span>immime12697@gmail.com</span>
        </div>
      </div>

      <hr />
      <div className="my-8">
        <div className="text-xl font-bold mb-2">경험</div>
        <span>(주)데이터뱅크</span>
        <span>2020.05 ~ 현재</span>
        <div>영어 시험 학습 플랫폼에서 프론트엔드 개발을 하고 있습니다.</div>
      </div>
      <hr />

      <div className="my-8">
        <div className="text-xl font-bold mb-2">교육</div>
        <span>학력</span>
        <span>대학교</span>
      </div>
      <hr />

      <div className="my-8">
        <div className="text-xl font-bold mb-2">기술</div>
        <span>react</span>
        <span>웹</span>
      </div>
    </div>
  );
};

export default Resume;
