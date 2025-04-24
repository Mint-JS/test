const questions = [
  {
    chapter: '0장',
    question: "'문제를 해결하는 절차'를 컴퓨터가 처리할 수 있도록 표현한 형식은?",
    answer: '알고리즘',
  },
  {
    chapter: '0장',
    question:
      '프로그램을 컴퓨터가 처리할 수 있는 형식으로 인코딩하여 컴퓨터 안에 저장하는 과정은?',
    answer: '프로그래밍',
  },
  {
    chapter: '0장',
    question: 'WWW에서 두 번째 W는 무엇의 약자인가?',
    answer: 'Wide',
  },
  {
    chapter: '0장',
    question: '아폴로 11호에 사용된 컴퓨터가 중국산 USB보다 성능이 좋다?',
    answer: '아니다 (현대 USB가 더 성능이 좋음)',
  },
  {
    chapter: '0장',
    question: '컴퓨터과학의 7대 주제가 아닌 것은?',
    answer: '알고리즘, 추상화, 창의성, 데이터, 프로그래밍, 인터넷, 사회적 영향 이외의 것',
  },
  {
    chapter: '0장',
    question:
      '개체의 외적 구성과 내적 속성의 세부사항을 구별하여, 복잡한 시스템을 설계하고 제작할 수 있게 해주는 개념은?',
    answer: '추상화',
  },
  {
    chapter: '0장',
    question: '전 세계 컴퓨터들과 전자장치를 연결한 것은?',
    answer: '인터넷',
  },
  {
    chapter: '0장',
    question: "프로그래밍 오류 중에서 '프로그램이 실행되는 동안 발생하는 오류'는?",
    answer: '런타임 오류 (실행 오류)',
  },
  {
    chapter: '0장',
    question: "'우리가 어떤 문제를 해결하기 위해 고안한 방법'을 가리키는 단어는?",
    answer: '알고리즘',
  },
  {
    chapter: '0장',
    question:
      '인터넷에 연결된 컴퓨터를 통해 정보를 공유하는 공간으로, 1990년 팀 버너스-리가 만든 것은?',
    answer: '월드와이드웹 (World Wide Web, WWW)',
  },
  {
    chapter: '1장',
    question: '입력값 중 하나만 1인 경우에 1을 출력하는 부울 연산은?',
    answer: 'XOR (배타적 논리합)',
  },
  {
    chapter: '1장',
    question: "'부울 연산을 계산하는 (논리적/물리적) 장치'를 무엇이라고 하나요? (한글로)",
    answer: '게이트',
  },
  {
    chapter: '1장',
    question: "'임의의 순서로 셀 영역에 접근할 수 있는 메모리'를 가리키는 용어는?",
    answer: 'RAM (임의 접근 메모리, Random Access Memory)',
  },
  {
    chapter: '1장',
    question: 'DRAM에서 D가 의미하는 것은?',
    answer: '동적 (Dynamic)',
  },
  {
    chapter: '1장',
    question: "'1킬로바이트'는 몇 바이트인가요?",
    answer: '1024 바이트',
  },
  {
    chapter: '1장',
    question: '주기억장치와 비교할 때, 대용량 저장장치의 특징이 아닌 것은?',
    answer: '빠른 데이터 접근 속도 (대용량 저장장치는 주기억장치보다 느림)',
  },
  {
    chapter: '1장',
    question: '주기억장치와 비교할 때, 대용량 저장장치의 단점이 아닌 것은?',
    answer: '낮은 저장 용량 (대용량 저장장치는 저장 용량이 큼)',
  },
  {
    chapter: '1장',
    question: 'SSD의 특징이 아닌 것은?',
    answer: '무한한 수명 (SSD는 쓰기 수명에 한계가 있음)',
  },
  {
    chapter: '1장',
    question: '세계 각국 언어에서 사용되는 주요 기호들을 표현할 수 있는 방법은?',
    answer: '유니코드 (Unicode)',
  },
  {
    chapter: '1장',
    question: '빛의 3원색인 적, 녹, 청으로 이미지를 표현하는 방법은?',
    answer: 'RGB 방식',
  },
  {
    chapter: '1장',
    question: '기하학적 구조(직선, 곡선)로 이미지를 표현하는 기법은?',
    answer: '벡터(Vector) 기법',
  },
  {
    chapter: '1장',
    question: '일정 간격으로 아날로그 데이터를 추출하여 디지털로 기록하는 기법은?',
    answer: '샘플링 (Sampling)',
  },
  {
    chapter: '1장',
    question: '파이썬에서 변수 이름을 잘못 적었을 때 발생하는 오류는?',
    answer: 'NameError',
  },
  {
    chapter: '1장',
    question: "압축 기법 중, 해당 항목의 '사용 빈도' 역순으로 비트 패턴 길이를 설정하는 방법은?",
    answer: '허프만 코드 (Huffman code)',
  },
  {
    chapter: '1장',
    question: '각 비트 패턴의 1의 개수를 고정하여 통신 오류를 체크하는 방법은?',
    answer: '패리티 비트 (Parity Bit)',
  },
  {
    chapter: '1장',
    question: '오류 정정 코드는 언제든지 원래 패턴으로 복구 가능하다?',
    answer: '아니다 (한계 내에서만 복구 가능)',
  },
  {
    chapter: '1장',
    question: '다음 2진수를 16진법으로 표현하면?',
    answer: '문제에 2진수 미제공, 예시: 10110101 → 0xB5',
  },
  {
    chapter: '1장',
    question: '다음 2진수를 10진수로 변환하면?',
    answer: '문제에 2진수 미제공, 예시: 11001 → 25',
  },
  {
    chapter: '1장',
    question: '다음의 숫자 표기법은?',
    answer: '문제에 표기법 미제공, 예시: 0x64 → 16진법',
  },
  {
    chapter: '1장',
    question:
      "코드 상의 오류(버그, bug)를 찾는 작업 중에 '기호 입력을 실수'할 때 발생하는 오류는?",
    answer: '구문 오류 (Syntax Error)',
  },
  {
    chapter: '1장',
    question: '다음 방식으로 이미지를 압축한 포맷은?',
    answer: '문제에 방식 미제공, 예시: 픽셀당 256색, 손실압축 → GIF',
  },
  {
    chapter: '2장',
    question: "연산 명령 중에서 '부호비트의 변경이 없는' 자리 이동은?",
    answer: '논리적 자리 이동 (Logical shift)',
  },
  {
    chapter: '2장',
    question: "'컴퓨터와 주변장치 간 데이터 전송을 조정하는 과정'을 가리키는 용어는?",
    answer: '핸드셰이킹 (Handshaking)',
  },
  {
    chapter: '2장',
    question: "'빠른 전송 속도'를 제공하는 통신 매체는?",
    answer: '병렬 통신 (Parallel communication)',
  },
  {
    chapter: '2장',
    question: "'복잡한 통신 경로'를 가지는 통신 매체는?",
    answer: '병렬 통신 (Parallel communication)',
  },
  {
    chapter: '2장',
    question: '1Kbps (Kilo-bps)는 몇 bps인가요?',
    answer: '1,000 bps',
  },
  {
    chapter: '2장',
    question: '비트 단위 연산자 중에서 OR 연산자는?',
    answer: '| (파이프 기호)',
  },
  {
    chapter: '2장',
    question: '함수의 장점이 아닌 것은?',
    answer: '코드의 복잡도를 증가시킨다 (함수는 복잡도를 줄임)',
  },
  {
    chapter: '2장',
    question: '값을 반환하지 않는 함수 앞에 사용하는 키워드는?',
    answer: 'void',
  },
  {
    chapter: '2장',
    question:
      'CPU와 메모리가 아무리 빨라져도, 작업 처리 방식에 따라서 비효율이 발생하는 현상은?',
    answer: '병목현상 (Bottleneck)',
  },
  {
    chapter: '2장',
    question: '다음 중 성능이 뛰어난 사물인터넷용 컴퓨터는?',
    answer: '라즈베리파이 (Raspberry Pi)',
  },
  {
    chapter: '2장',
    question: '병렬연산에 최적화된 처리 장치는?',
    answer: 'GPU (Graphic Processing Unit)',
  },
  {
    chapter: '2장',
    question: '컴퓨터 구조에서 다음의 장치는?',
    answer: '문제에 장치 미제공, 예시: 중앙처리장치 → CPU',
  },
  {
    chapter: '2장',
    question: '다음 기계어 타입은?',
    answer: '문제에 타입 미제공, 예시: RISC, CISC 등',
  },
  {
    chapter: '2장',
    question: '다음 중 기계 명령의 종류가 아닌 것은?',
    answer: '문제에 명령 미제공, 예시: 데이터 전송, 연산, 제어 외의 것',
  },
  {
    chapter: '2장',
    question: '기계 주기의 3단계는?',
    answer: '인출(fetch), 해석(decode), 실행(execute)',
  },
  {
    chapter: '2장',
    question: '기계어 처리율의 개선을 위한 다음 기술은?',
    answer: '파이프라이닝 (Pipelining)',
  },
  {
    chapter: '2장',
    question: "'10110011'을 오른쪽으로 '산술적' 자리 이동을 한 경우, 결과값은?",
    answer: '11011001',
  },
  {
    chapter: '2장',
    question: "'10110011'을 왼쪽으로 '회전식' 자리 이동을 한 경우, 결과값은?",
    answer: '01100111',
  },
  {
    chapter: '3장',
    question: "'운영체제'에 대한 설명으로 틀린 것은?",
    answer: '문제에 선택지 미제공, 예시: "운영체제는 하드웨어가 아니다" 등',
  },
  {
    chapter: '3장',
    question: '커널이 관리하는 것이 아닌 것은?',
    answer: '애플리케이션 소프트웨어 (커널은 메모리, CPU, 장치 등을 관리함)',
  },
  {
    chapter: '3장',
    question: '운영체제가 초기화되는 절차를 무엇이라고 하는가?',
    answer: '부팅 (Booting)',
  },
  {
    chapter: '3장',
    question: "'운영체제의 제어 하에서 프로그램을 실행하는 활동'을 무엇이라고 하나요?",
    answer: '프로세스 (Process)',
  },
  {
    chapter: '3장',
    question: '프로세스에게 할당된 시간이 끝나면 발생하는 것은?',
    answer: '문맥 교환 (Context switch)',
  },
  {
    chapter: '3장',
    question:
      '둘 이상의 프로세스가 서로 상대방에 할당된 자원을 기다리느라, 어느 프로세스도 진행하지 못하는 상태?',
    answer: '교착상태 (Deadlock)',
  },
  {
    chapter: '3장',
    question: "운영체제가 '보안'을 위해 하는 작업이 아닌 것은?",
    answer: '프로그램의 디자인 (보안은 접근 제어, 인증, 암호화 등)',
  },
  {
    chapter: '3장',
    question: '권한이 있는 상태를 의미하는 모드는?',
    answer: '특권 모드 (Privileged mode)',
  },
  {
    chapter: '3장',
    question: '운영체제의 작업 처리 방식 중에서 다음에 해당하는 것은?',
    answer: '문제에 방식 미제공, 예시: 일괄처리, 대화식, 시분할 등',
  },
  {
    chapter: '3장',
    question: '운영체제의 구성요소 중 다음에 해당하는 것은?',
    answer: '문제에 구성요소 미제공, 예시: 커널, 사용자 인터페이스 등',
  },
  {
    chapter: '3장',
    question: '다음 중 같은 계열의 운영체제가 아닌 것은?',
    answer: '문제에 운영체제 미제공, 예시: 윈도우, 리눅스, 맥OS 등',
  },
  {
    chapter: '3장',
    question: '데스크톱 운영체제 중에서 점유율이 가장 높은 것은?',
    answer: '윈도우 (Windows)',
  },
  {
    chapter: '3장',
    question: '스마트폰 운영체제 중에서 점유율이 가장 높은 것은?',
    answer: '안드로이드 (Android)',
  },
  {
    chapter: '3장',
    question: '컴퓨터의 전반적인 운영을 제어하는 소프트웨어?',
    answer: '운영체제 (Operating System)',
  },
  {
    chapter: '3장',
    question:
      "주기억장치와 대용량 저장장치 사이에서 데이터 블록을 이동하여 만들어진 '가상적인' 큰 기억공간은?",
    answer: '가상메모리 (Virtual Memory)',
  },
  {
    chapter: '3장',
    question: '공유 자원에 대해 여러 개의 프로세스가 동시에 접근을 시도하는 경우를 의미하는 용어는?',
    answer: '경쟁 조건 (Race Condition)',
  },
  {
    chapter: '4장',
    question: "네트워크의 분류 중에서 'LAN'으로 불리며, 건물이나 캠퍼스 범위를 가지는 통신망은?",
    answer: '근거리 통신망 (Local Area Network, LAN)',
  },
  {
    chapter: '4장',
    question: '네트워크 상에서 컴퓨터들이 연결되는 패턴을 의미하는 것은?',
    answer: '토폴로지 (Topology)',
  },
  {
    chapter: '4장',
    question:
      '네트워크 상에서 활동을 수행하기 위한 규칙으로, 서로 호환되는 네트워크 응용 제품에 반드시 맞춰야 하는 것은?',
    answer: '프로토콜 (Protocol)',
  },
  {
    chapter: '4장',
    question:
      '네트워크 연결 장비 중에서, 호환되지 않는 네트워크들을 연결하여 인터네트워크를 구성하는 것은?',
    answer: '라우터 (Router)',
  },
  {
    chapter: '4장',
    question:
      '프로세스 간 통신 방법 중에서, 두 개의 프로세스가 동등한 자격으로 통신하고 필요할 때만 일시적으로 실행하는 모델은?',
    answer: 'P2P (Peer-to-Peer) 모델',
  },
  {
    chapter: '4장',
    question:
      '분산시스템의 최신 유형으로, 방대한 컴퓨터 자원을 제공하지만 세부사항은 숨기는 컴퓨팅 방식은?',
    answer: '클라우드 컴퓨팅 (Cloud Computing)',
  },
  {
    chapter: '4장',
    question:
      '전 세계를 연결하는 인터네트워크로, 국지적 재난에도 불통 상태에 이르지 않을 네트워크 연결 수단을 목표로 개발된 것은?',
    answer: '인터넷 (Internet)',
  },
  {
    chapter: '4장',
    question:
      '기존 인터넷 주소 체계를 개선한 것으로, 128비트 주소 크기를 가지며 품질/보안/모바일/웹캐스팅에서 향상된 기능을 제공하는 것은?',
    answer: 'IPv6',
  },
  {
    chapter: '4장',
    question: '인터넷 주소 체계를 IP 주소로 변환해주는 네임 서버들로 구성된 시스템은?',
    answer: 'DNS (Domain Name System)',
  },
  {
    chapter: '4장',
    question: '하이퍼텍스트(hypertext)라는 링크 연결 문서 개념을 인터네트워크 기술에 결합한 것은?',
    answer: '월드와이드웹 (World Wide Web, WWW)',
  },
  {
    chapter: '4장',
    question: '월드와이드웹에서 특정 문서를 가리키는 주소는?',
    answer: 'URL (Uniform Resource Locator)',
  },
  {
    chapter: '4장',
    question: 'HTML 파일에서 다른 문서나 내용에 대한 하이퍼링크를 추가하는 태그는?',
    answer: '<a> 태그',
  },
  {
    chapter: '4장',
    question: '다음 네트워크 토폴로지는?',
    answer: '문제에 토폴로지 그림 미제공, 예시: 스타, 버스, 링 등',
  },
  {
    chapter: '4장',
    question: '메시지 전송을 위한 다음 프로토콜은?',
    answer: '문제에 프로토콜 미제공, 예시: SMTP, HTTP, FTP 등',
  },
  {
    chapter: '4장',
    question: '다음을 뜻하는 월드와이드웹 관련 용어는?',
    answer: '문제에 용어 미제공, 예시: 브라우저, 웹서버 등',
  },
  {
    chapter: '4장',
    question: '인터넷 소프트웨어 계층 중 다음에 해당하는 계층은?',
    answer: '문제에 계층 미제공, 예시: 응용, 전송, 네트워크, 링크, 물리 등',
  },
  {
    chapter: '4장',
    question: '전송 계층에서 다음에 해당하는 프로토콜은?',
    answer: '문제에 프로토콜 미제공, 예시: TCP, UDP 등',
  },
  {
    chapter: '4장',
    question:
      '서버/클라이언트 프로그래밍에서 프로세스들의 연결을 처리하는 추상화 요소로, 전송 계층을 통해 네트워크상의 다른 프로세스와 연결을 형성하는 것은?',
    answer: '소켓 (Socket)',
  },
  {
    chapter: '4장',
    question: '사이버보안에서 다음을 의미하는 용어는?',
    answer: '문제에 용어 미제공, 예시: 멀웨어, 랜섬웨어, 피싱 등',
  },
]
