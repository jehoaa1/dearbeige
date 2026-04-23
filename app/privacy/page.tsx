export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Privacy Policy (개인정보처리방침)
        </h1>

        <div className="space-y-5 text-sm leading-relaxed text-gray-700 md:text-base">
          <p>
            <strong>최종 수정일: 2026년 4월 23일</strong>
          </p>
          <p>
            디어베이지(이하 &apos;회사&apos;)는 사용자의 개인정보를 소중하게
            보호합니다. 본 정책은 &apos;말랑스케치&apos; 서비스 이용 시 발생할 수
            있는 데이터 처리에 대해 설명합니다.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              1. 수집하는 개인정보 항목 및 방법
            </h2>
            <p>
              본 앱은 별도의 회원가입이나 로그인을 요구하지 않으며, 사용자의
              직접적인 개인식별정보(이름, 이메일 등)를 수집하지 않습니다. 다만,
              서비스 개선 및 광고 제공을 위해 다음과 같은 정보가 자동으로 생성 및
              수집될 수 있습니다.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>ADID (광고 식별자): 맞춤형 광고 제공을 위해 사용</li>
              <li>기기 정보: 앱 최적화 및 오류 분석을 위한 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              2. 광고 제공 및 애드몹(AdMob) 이용
            </h2>
            <p>
              본 서비스는 Google AdMob 광고를 포함하고 있습니다. AdMob은 광고
              제공 및 분석을 위해 사용자의 ADID를 수집할 수 있으며, 이는
              Google의 개인정보처리방침을 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              3. 결제 기능 및 서비스 (예정)
            </h2>
            <p>
              회사는 향후 사용자의 편의를 위해 &apos;광고 제거&apos; 기능을 인앱
              결제 상품으로 제공할 예정입니다. 모든 결제는 Google Play 결제
              시스템을 통해 안전하게 처리되며, 회사는 결제 수단 정보를 직접
              보유하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              4. 데이터 보안 및 로컬 저장
            </h2>
            <p>
              사용자가 작성한 드로잉 데이터는 기기의 로컬 저장소에 저장되며,
              회사의 서버로 전송되거나 공유되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">5. 문의처</h2>
            <p>서비스 및 개인정보 관련 문의: nolsinb4@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
