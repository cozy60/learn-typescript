interface PhoneNumberDictionary {
  // 어떤 key값이 오던 받을 수 있게 phone 안에 string으로 타입 정의
  // 객체 안의 규격은 숫자로 오도록
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
// function fetchContacts(): Promise { //Promise로 반환 값 정의시  에러
// 'Promise<T>' 제네릭 형식에 1 형식 인수가 필요합니다.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  // 프로미스 타입이 제네릭을 받도록 내부적으로 구현 되어 있음
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  // 초기화 코드
  constructor() {
    this.fetchData();
    // this.findContactByPhone(PhoneType.Home); // 안전하게 사용하기
  }

  fetchData(): void {
    fetchContacts().then(response => {
      // response가 (parameter) response: Contact[] 로 추론됨
      // 이는 fetchContacts가 Promise를 반환하고, Promise의 반환값은 Contact[]가 되기 떄문
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  // Contact에서 name이 string이기 때문에 동일하게 지정
  findContactByName(name: string): Contact[] { 
    // filter 함수를 사용하면 각 요소의 타입을 볼 수 있다.
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // home, office, studio
  findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  // findContactByPhone("officce"); 
  // 이러한 에러를 방지하기 위해, 해당 속성들을 변수화 해서 들고 다니는 방식으로 변경하기
  // 이때 enum을 사용할 수 있다.
  // 타입 관점에서 안전한 코딩

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

// map 메서드
let heroes = [
  { name: "Tony", age: 30 },
  { name: "Captain", age: 100 },
];
heroes.map(function(hero) {
  return hero.name;
}); // ["Tony", "Captain"]

new AddressBook();
