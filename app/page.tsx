export default function Home() {
  return (
    <>
      <nav className="fixed z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-tighter text-amber-800">
            DEAR BEIGE
          </div>
          <div className="hidden space-x-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-amber-600">
              About
            </a>
            <a href="#apps" className="transition hover:text-amber-600">
              Apps
            </a>
            <a href="#privacy" className="transition hover:text-amber-600">
              Privacy Policy
            </a>
            <a href="#contact" className="transition hover:text-amber-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-[#f5f5dc] px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
            따뜻한 감성을 그리는 <br />
            <span className="text-amber-700">디어베이지</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
            우리는 일상 속의 작은 즐거움을 디지털로 구현합니다.<br />
            디어베이지의 첫 번째 프로젝트, 말랑스캐치를 만나보세요.
          </p>
          <div className="inline-block rounded-2xl bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
              alt="Drawing concept"
              className="h-64 w-full max-w-lg rounded-xl object-cover shadow-inner"
            />
          </div>
        </div>
      </section>

      <section id="apps" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">
                Featured App
              </span>
              <h2 className="mt-2 mb-6 text-3xl font-bold">말랑스캐치</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                누구나 쉽게 예술가가 될 수 있습니다. 말랑스캐치는 가로형
                캔버스에서 단순하고 직관적인 드로잉 경험을 제공합니다. 복잡한
                과정 없이 즉시 시작하여 당신의 상상을 캔버스에 담아보세요.
              </p>
              <ul className="mb-8 space-y-4 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  로그인 없는 즉각적인 사용성
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  가로모드 전용 최적화 드로잉 환경
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  기능에 집중한 단일 브러쉬 시스템
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                  광고 포함
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  광고 제거 구매 예정
                </span>
              </div>
            </div>
            <div className="w-full max-w-2xl flex-1">
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-gray-800 bg-gray-100 p-3 shadow-2xl">
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] bg-white p-6 text-center">
                  <div className="absolute inset-0 flex items-center justify-center bg-amber-50/10">
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-100 text-4xl shadow-sm">
                        🎨
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-amber-900">
                        Mallang Sketch
                      </h3>
                      <p className="text-sm text-gray-500">
                        Simple &amp; Pure Landscape Art
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 flex h-8 w-full items-center justify-center bg-gray-200/80 text-[10px] font-bold text-gray-500">
                    ADVERTISEMENT BAR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="privacy"
        className="border-y border-gray-200 bg-gray-50 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold lg:text-left">
            Privacy Policy (개인정보처리방침)
          </h2>
          <div className="h-96 overflow-y-scroll rounded-xl border border-gray-100 bg-white p-8 text-sm leading-relaxed text-gray-600 shadow-sm">
            <p className="mb-4">
              <strong>최종 수정일: 2026년 4월 23일</strong>
            </p>
            <p className="mb-4">
              디어베이지(이하 &apos;회사&apos;)는 사용자의 개인정보를 소중하게
              보호합니다. 본 정책은 &apos;말랑스캐치&apos; 서비스 이용 시 발생할
              수 있는 데이터 처리에 대해 설명합니다.
            </p>

            <h3 className="mt-6 mb-2 font-bold text-gray-800">
              1. 수집하는 개인정보 항목 및 방법
            </h3>
            <p>
              본 앱은 별도의 회원가입이나 로그인을 요구하지 않으며, 사용자의
              직접적인 개인식별정보(이름, 이메일 등)를 수집하지 않습니다. 다만,
              서비스 개선 및 광고 제공을 위해 다음과 같은 정보가 자동으로 생성
              및 수집될 수 있습니다.
            </p>
            <ul className="mt-2 ml-6 list-disc">
              <li>ADID (광고 식별자) : 맞춤형 광고 제공을 위해 사용</li>
              <li>기기 정보 : 앱 최적화 및 오류 분석을 위한 정보</li>
            </ul>

            <h3 className="mt-6 mb-2 font-bold text-gray-800">
              2. 광고 제공 및 애드몹(AdMob) 이용
            </h3>
            <p>
              본 서비스는 Google AdMob 광고를 포함하고 있습니다. AdMob은 광고
              제공 및 분석을 위해 사용자의 ADID를 수집할 수 있으며, 이는
              Google의 개인정보처리방침을 따릅니다.
            </p>

            <h3 className="mt-6 mb-2 font-bold text-gray-800">
              3. 결제 기능 및 서비스 (예정)
            </h3>
            <p>
              회사는 향후 사용자의 편의를 위해 &apos;광고 제거&apos; 기능을 인앱
              결제 상품으로 제공할 예정입니다. 모든 결제는 Google Play 결제
              시스템을 통해 안전하게 처리되며, 회사는 결제 수단 정보를 직접
              보유하지 않습니다.
            </p>

            <h3 className="mt-6 mb-2 font-bold text-gray-800">
              4. 데이터 보안 및 로컬 저장
            </h3>
            <p>
              사용자가 작성한 드로잉 데이터는 기기의 로컬 저장소에 저장되며,
              회사의 서버로 전송되거나 공유되지 않습니다.
            </p>

            <h3 className="mt-6 mb-2 font-bold text-gray-800">5. 문의처</h3>
            <p>서비스 및 개인정보 관련 문의: nolsinb4@gmail.com</p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-gray-100 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Contact &amp; Company Info
          </h2>
          <div className="grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-amber-50 p-6">
              <h4 className="mb-2 font-bold text-amber-900">사업자 등록번호</h4>
              <p className="text-sm text-gray-600">DEAR BEIGE (디어베이지)</p>
              <p className="mt-2 text-xs text-gray-400">266-10-00540</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-6">
              <h4 className="mb-2 font-bold text-amber-900">이메일</h4>
              <p className="text-gray-600">nolsinb4@gmail.com</p>
              <p className="mt-2 text-xs text-gray-400">앱 이용 및 제휴 문의</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-6">
              <h4 className="mb-2 font-bold text-amber-900">소재지</h4>
              <p className="text-sm text-gray-600">Seoul, South Korea</p>
              <p className="leading-snug text-gray-600">
                서울특별시 중랑구 공릉로14길 8-13
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between opacity-80 md:flex-row">
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <p className="text-sm font-bold">DEAR BEIGE (디어베이지)</p>
            <p className="mt-1 text-xs">© 2026 All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="mailto:nolsinb4@gmail.com" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
