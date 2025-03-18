import React from 'react';

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center w-full h-full p-[20px]'>
      <div className='text-[40px] font-bold leading-[50px] text-center my-[60px]'>
        <span className='text-[#9D68D3] font-extrabold'>성실함</span>의 결과를
        믿고,
        <br />
        <span className='text-[#9D68D3] font-extrabold'>
          책임감
        </span>의 무게를 무겁게 여기며,
        <br />
        <span className='text-[#9D68D3] font-extrabold'>
          소통
        </span>을 두려워하지 않는
        <br />
        <div className='mt-[30px]'>
          <span className='text-[#9D68D3] font-extrabold'>
            프론트엔드 개발자,
          </span>
          <br />
          <span className='text-[#9D68D3] font-extrabold'>정지민</span>
          입니다.
        </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <div>
          <div className='text-[18px] font-bold leading-[36px]'>
            🟣 성실함, 책임감 & 소통
          </div>
          끊임없는 노력과 책임감을 바탕으로 성장하는 개발자입니다. <br />
          맡은 업무에 대한 철저한 분석과 개선을 통해 더 나은 결과물을 만들기
          위해 노력하며, <br />
          원활한 협업을 위한 소통을 중요하게 생각합니다. <br />
        </div>
        <div>
          <div className='text-[18px] font-bold leading-[36px]'>
            🟣 디자인 경험을 활용한 UI/UX 개발
          </div>
          8년간 디자이너로 일하며 사용자 경험(UX)에 대한 깊은 이해를 쌓았으며,
          <br />
          지난 2년간 프론트엔드 개발자로 UI/UX 설계 및 개선에 집중해왔습니다.
          <br />
          다양한 팀원들과의 협업을 통해 사용자 중심의 인터페이스를 구축하는 데
          주력해왔습니다. <br />
        </div>
        <div>
          <div className='text-[18px] font-bold leading-[36px]'>
            🟣 최적화 & 성능 개선 목표
          </div>
          앞으로는 웹 성능 최적화와 효율적인 코드 설계에 집중하여, <br />
          더욱 빠르고 안정적인 사용자 경험을 제공하는 개발자로 성장하고자
          합니다.
        </div>
      </div>
    </div>
  );
}
