const newStudentBtn = document.querySelector(
  '.add__new__student__button__container'
);
const newSBtn = document.querySelector('.add__new__student__button');
const afterSchoolPickupCount = document.querySelector('.after__school');
const signinForm = document.querySelector('.section__container');
const tabsContainer = document.querySelector('.tabs__container');
const tabs = document.querySelectorAll('.tab__container__header__text');
const tabsContent = document.querySelectorAll('.info__content');

//////////////////////////////////////////////////////////////////////////////////
const firstName = document.querySelector('.first__name__input');
const lastName = document.querySelector('.last__name__input');
const email = document.querySelector('.email__input');
const phone = document.querySelector('.phone__input');
const address = document.querySelector('.address__input');
const waiver = document.querySelector('.waiver__input');
const emergencyFullName = document.querySelector(
  '.emergency__full__name__input'
);
const emergencyPhone = document.querySelector('.emergency__phone__input');
const emergencyRelationship = document.querySelector(
  '.emergency__relationship__input'
);
const childName = document.querySelector('.student__name__input');
const childBirthday = document.querySelector('.student__birthday__input');
const jiujitsuProgram = document.querySelector('.student__program__input');
const childStartDate = document.querySelector('.student__start__date__input');
const afterSchoolProgram = document.querySelector(
  '.after__school__pickup__input'
);
const childPerferedSchedule = document.querySelector(
  '.student__perfered__schedule__input'
);
const creditCardFullName = document.querySelector('.credit__card__name__input');
const creditCardNumber = document.querySelector('.credit__card__number__input');
const creditCardExpiration = document.querySelector(
  '.credit__card__expiration__input'
);
const creditCardCVV = document.querySelector('.credit__card__cvv__input');
const additionalInfo = document.querySelector('.additional__info__input');
//////////////////////////////////////////////////////////////////////////////////

const formSubmit = document.querySelector('.form__submit');
const form = document.querySelector('.form');
const successMessage = document.querySelector('.success__message');
const studentCount = document.querySelector('.student__count');
const monthlyIncomeContainer = document.querySelector(
  '.monthly__income__container'
);
const monthlyIncomeCount = document.querySelector('.monthly__income__count');
const monthlyRentCount = document.querySelector('.monthly__rent__count');
const monthlyRentContainer = document.querySelector(
  '.monthly__rent__container'
);
const monthlyProfitContainer = document.querySelector(
  '.monthly__profit__container'
);
const monthlyProfitCount = document.querySelector('.monthly__profit__count');
//////////////////////////////////////////////////////////////////////////////////
const tinyChampRow = document.querySelector('.tiny__champ__row');
const littleChampRow = document.querySelector('.little__champ__row');
const juniorChampRow = document.querySelector('.junior__champ__row');
const tinyChampRow2 = document.querySelector('.tiny__champ__row2');
const littleChampRow2 = document.querySelector('.little__champ__row2');
const juniorChampRow2 = document.querySelector('.junior__champ__row2');
const tinyChampRow3 = document.querySelector('.tiny__champ__row3');
const littleChampRow3 = document.querySelector('.little__champ__row3');
const juniorChampRow3 = document.querySelector('.junior__champ__row3');
const tinyChamp = document.querySelector('.tiny__champ');
const parentsRow = document.querySelector('.parents__row');
const creditCardRow = document.querySelector('.credit__card__row');
const creditCardRow2 = document.querySelector('.credit__card__row2');
const jsonDataRow = document.querySelector('.json__data__row');
const jasonDataInput = document.querySelector('.json__data__input');
const copyAllButton = document.querySelector('.copy__all__button');
const optionARow = document.querySelector('.optionA__row');
const optionBRow = document.querySelector('.optionB__row');
const tinyChampProgressBarCount = document.querySelector(
  '.tiny__champ__progress__bar__count'
);
const progressBarFillTinyChamp = document.querySelector(
  '.tiny__champ__bar__fill'
);
const littleChampProgressBarCount = document.querySelector(
  '.little__champ__progress__bar__count'
);
const progressBarFillLittleChamp = document.querySelector(
  '.little__champ__bar__fill'
);
const juniorChampProgressBarCount = document.querySelector(
  '.junior__champ__progress__bar__count'
);
const progressBarFillJuniorChamp = document.querySelector(
  '.junior__champ__bar__fill'
);
//////////////////////////////////////////////////////////////////////////////////
const modalContainer = document.querySelector('.modal__container');
const modalContent = document.querySelector('.modal__content');
const modalBody = document.querySelector('.modal__body');
const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const contentActive = document.querySelector('.content__active');
const exportButtonContainer = document.querySelector(
  '.export__button__container'
);
const exportUserData = document.querySelector('.export__button');
const csvDownload = document.querySelector('.csv__download');
const optionA = document.querySelector('.option__a');
const optionB = document.querySelector('.option__b');
const dashboardDailyQuote = document.querySelector('.dashboard__daily__quotes');
const inspirationalQuote = document.querySelector('.inspirational__quote');
const toggleContainer = document.querySelector('.toggle__container');
const darkModeToggle = document.querySelector('.onoffswitch-checkbox');
const countContainer = document.querySelectorAll('.count__container');
const section3Container = document.querySelector('.section3__container');
const section6Container = document.querySelector('.section6__container');
const progressBarProgram = document.querySelectorAll('.progress__bar__program');
const cardContainer = document.querySelectorAll('.card__container');
const section1 = document.querySelector('.section1');
const formInputContainer = document.querySelectorAll('form__input__container');
const gbInput = document.querySelector('.gb__input');
const myChart = document.querySelector('#myChart');
const grandOpeningDealContainer = document.querySelector(
  '.grand__opening__deal__container'
);
const grandOpeningDealCount = document.querySelector(
  '.grand__opening__deal__count'
);
const afterSchoolPickupContainer = document.querySelector(
  '.after__school__pickup__container'
);
const afterSchoolPickupCount1 = document.querySelector(
  '.after__school__pickup__count'
);
const bubbleChart = document.querySelector('.myBubbleChart');
const modalEditContainer = document.querySelector('.modal__edit__container');
const modalDeleteContainer = document.querySelector(
  '.modal__delete__container'
);
const grandOpendingCount = document.querySelector('.grandOpeningCount');
const studentCount2 = document.querySelector('.studentCount');
const afterSchoolPickupCount2 = document.querySelector(
  '.afterSchoolPickupCount2'
);
const perferedPaymentDateContainer = document.querySelector(
  '.perfered__payment__date__date'
);
const perferedPaymentDate = document.querySelector(
  '.perfered__payment__date__input'
);
const firstOfTheMonth = document.querySelector('.first__of__the__month');
const fifteenthOfTheMonth = document.querySelector(
  '.fifthteen__of__the__month'
);

//////////////////////////////////////////////////////////////////////////////////////////
const firstNameModal = document.querySelector('.first__name__input__modal');
const lastNameModal = document.querySelector('.last__name__input__modal');
const emailModal = document.querySelector('.email__input__modal');
const phoneModal = document.querySelector('.phone__input__modal');
const addressModal = document.querySelector('.address__input__modal');
const waiverModal = document.querySelector('.waiver__input__modal');
const emergencyFullNameModal = document.querySelector(
  '.emergency__full__name__input__modal'
);
const emergencyPhoneModal = document.querySelector(
  '.emergency__phone__input__modal'
);
const emergencyRelationshipModal = document.querySelector(
  '.emergency__relationship__input__modal'
);
const childNameModal = document.querySelector('.student__name__input__modal');
const childBirthdayModal = document.querySelector(
  '.student__birthday__input__modal'
);
const jiujitsuProgramModal = document.querySelector(
  '.student__program__input__modal'
);
const childStartDateModal = document.querySelector(
  '.student__start__date__input__modal'
);
const afterSchoolProgramModal = document.querySelector(
  '.after__school__pickup__input__modal'
);
const childPerferedScheduleModal = document.querySelector(
  '.student__perfered__schedule__input__modal'
);
const creditCardFullNameModal = document.querySelector(
  '.credit__card__name__input__modal'
);
const creditCardNumberModal = document.querySelector(
  '.credit__card__number__input__modal'
);
const creditCardExpirationModal = document.querySelector(
  '.credit__card__expiration__input__modal'
);
const creditCardCVVModal = document.querySelector(
  '.credit__card__cvv__input__modal'
);

const perferedPaymentDateModal = document.querySelector(
  '.perfered__payment__date__input__modal'
);
const additionalInfoModal = document.querySelector(
  '.additional__info__input__modal'
);
const formUpdate = document.querySelector('.form__update');
//////////////////////////////////////////////////////////////////////////////////////////
const afterSchool2Day = document.querySelector('.after__school__2__day');
const afterSchool3Day = document.querySelector('.after__school__3__day');
const afterSchool4Day = document.querySelector('.after__school__4__day');
const afterSchool5Day = document.querySelector('.after__school__5__day');
const numCount2 = document.querySelector('.num__count2');
const numCount3 = document.querySelector('.num__count3');
const numCount4 = document.querySelector('.num__count4');
const numCount5 = document.querySelector('.num__count5');
//////////////////////////////////////////////////////////////////////////////////////////////
const customerSignUpFormContatiner = document.querySelector(
  '.customer__signup__form__container'
);
const customerSignUpForm = document.querySelector('.customer__signup__form');
const dashboard = document.querySelector(
  '.dashboard__add__new__student__container'
);
const customerSignupFormToggle = document.querySelector(
  '.customer__signup__form__toggle'
);
const customerFormContainerSubmit = document.querySelector(
  '.customer__form__container__submit'
);
const customerSignupFormBodyContainer = document.querySelectorAll(
  '.customer__signup__form__body__container'
);
const stepsCount = document.querySelectorAll('.steps__count');
const step1Button = document.querySelector('.step__1__button');
const step2Button = document.querySelector('.step__2__button');
const step3Button = document.querySelector('.step__3__button');
const step4Button = document.querySelector('.step__4__button');
const step5Button = document.querySelector('.step__5__button');
const backButtonStep2 = document.querySelector('.back__button__step2');
const backButtonStep3 = document.querySelector('.back__button__step3');
const backButtonStep4 = document.querySelector('.back__button__step4');
const backButtonStep5 = document.querySelector('.back__button__step5');
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');
const step4 = document.querySelector('.step-4');
const step5 = document.querySelector('.step-5');
const customerFormSubmit = document.querySelector('.customer__form__submit');
//////////////////////////////////////////////////////////////////////////////////////////////
const congratsContainer = document.querySelector('.congrats__container');
const studentEnrollmentName = document.querySelector(
  '.student__enrollment__name'
);
const studentEnrollmentProgram = document.querySelector(
  '.student__enrollment__program'
);
//////////////////////////////////////////////////////////////////////////////////////////////
const firstNameCustomer = document.querySelector(
  '.first__name__input__customer'
);
const lastNameCustomer = document.querySelector('.last__name__input__customer');
const emailCustomer = document.querySelector('.email__input__customer');
const phoneCustomer = document.querySelector('.phone__input__customer');
const addressCustomer = document.querySelector('.address__input__customer');
const waiverCustomer = document.querySelector('.waiver__input__customer');
const emergencyFullNameCustomer = document.querySelector(
  '.emergency__full__name__input__customer'
);
const emergencyPhoneCustomer = document.querySelector(
  '.emergency__phone__input__customer'
);
const emergencyRelationshipCustomer = document.querySelector(
  '.emergency__relationship__input__customer'
);
const childNameCustomer = document.querySelector(
  '.student__name__input__customer'
);
const childBirthdayCustomer = document.querySelector(
  '.student__birthday__input__customer'
);
const jiujitsuProgramCustomer = document.querySelector(
  '.student__program__input__customer'
);
const childStartDateCustomer = document.querySelector(
  '.student__start__date__input__customer'
);
const afterSchoolProgramCustomer = document.querySelector(
  '.after__school__pickup__input__customer'
);
const childPerferedScheduleCustomer = document.querySelector(
  '.student__perfered__schedule__input__customer'
);
const creditCardFullNameCustomer = document.querySelector(
  '.credit__card__name__input__customer'
);
const creditCardNumberCustomer = document.querySelector(
  '.credit__card__number__input__customer'
);
const creditCardExpirationCustomer = document.querySelector(
  '.credit__card__expiration__input__customer'
);
const creditCardCVVCustomer = document.querySelector(
  '.credit__card__cvv__input__customer'
);

const perferedPaymentDateCustomer = document.querySelector(
  '.perfered__payment__date__input__customer'
);
const additionalInfoCustomer = document.querySelector(
  '.additional__info__input__customer'
);
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const signaturePad = document.querySelector('.signature__pad');
const signaturePad2 = document.querySelector('.signature__pad2');

const congratsModal = document.querySelector('.congradulations__modal');
const congratsStudentEnrollmentName = document.querySelector(
  '.student__enrollment__name__modal'
);
const congratsStudentEnrollmentProgram = document.querySelector(
  '.student__enrollment__program__modal'
);
const sigatureContainer = document.querySelector('.signature__container');
const monthlyReportRow = document.querySelector('.monthly__report__row');
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

class App {
  _monthlyFee = 175;
  _AfterSchoolPickupFee = 175;
  _AfterSchoolPickupFee2Days = 125;
  _AfterSchoolPickupFee3Days = 175;
  _AfterSchoolPickupFee4Days = 250;
  _AfterSchoolPickupFee5Days = 300;
  __TwoDays = [];
  __ThreeDays = [];
  __FourDays = [];
  __FiveDays = [];
  _monthlyRent = 8000;
  _grandOpeningDeal = 299;
  _newStudentInfoTinyChamp = [];
  _newStudentInfoLittleChamp = [];
  _newStudentInfoJuniorChamp = [];
  _AfterSchoolPickupCount = [];
  _optionACount = [];
  _optionBCount = [];
  _userData;
  _userDataModal = [];
  _userIndex;
  _MonthlyReport = [];

  constructor() {
    //clear local storage
    // localStorage.clear();
    this.getUserData();
    this.addNewStudentActive();
    this.tabs();
    this.modal();
    this.customerFormUpdateModal();
    this.showTime();
    this.inspirationalQuoteGenerator();
    this.darkMode();
    this.displayPerferedPaymentDate();
    this.displayCustomerSignUpForm();
    this.customerSignupForm();
    this.customerFormSubmit();
    this.displayMonthlyReport();

    document.addEventListenter(
      'DOMContentLoaded',
      this.customerSignature(),
      this.customerSignatureModal()
    );
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //1) Fetch data from data.json and local storage user data2
  getUserData() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const localStorageData = JSON.stringify(data);

        //use map method to loop through local storage data and store it in _userData
        const studentData = JSON.parse(localStorageData).map(student => {
          //return student info
          return {
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            phone: student.phone,
            address: student.address,
            emergencyFullName: student.emergencyFullName,
            emergencyPhone: student.emergencyPhone,
            emergencyRelationship: student.emergencyRelationship,
            childName: student.childName,
            childBirthday: student.childBirthday,
            jiujitsuProgram: student.jiujitsuProgram,
            childStartDate: student.childStartDate,
            afterSchoolProgram: student.afterSchoolProgram,
            childPerferedSchedule: student.childPerferedSchedule,
            creditCardFullName: student.creditCardFullName,
            creditCardNumber: student.creditCardNumber,
            creditCardExpiration: student.creditCardExpiration,
            creditCardCVV: student.creditCardCVV,
            perferedPaymentDate: student.perferedPaymentDate,
            additionalInfo: student.additionalInfo,
            signature: student.signature,
          };
        });

        localStorage.setItem('userData', JSON.stringify(studentData));

        //if local storage userData2 is empty, then get userdata from data.json file and store it in local storage
        if (localStorage.getItem('userData2') !== null) {
          this._userData = JSON.parse(localStorage.getItem('userData2'));
          this._userIndex = this._userData.length;
        } else {
          this._userData = JSON.parse(localStorage.getItem('userData'));
          this._userIndex = this._userData.length;
        }

        this.formSubmit(this._userData);
        this.displayafterSchoolPickupCount(this._userData);
        this.displayStudentInfo(this._userData);
        this.displayParentsInfo(this._userData);
        this.displayCreditCardInfo(this._userData);
        this.displayJsonData(this._userData);
        this.displayJuniorChampModal(this._userData);
        this.displayTinyChampModal(this._userData);
        this.displayLittleChampModal(this._userData);
        this.displayOptionA(this._userData);
        this.displayOptionB(this._userData);
        this.exportUserData(this._userData);
        this.displayOptionACount(this._userData);
        this.displayOptionBCount(this._userData);
      })
      .catch(error => console.log(error + 'Something went wrong 💩💩💩'));
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //2) Display After school pickup cost, student count, and total cost
  displayafterSchoolPickupCount(userData) {
    //loop through userData and push after school pickup to _AfterSchoolPickupCount array

    userData.forEach(student => {
      if (student.afterSchoolProgram !== '') {
        this._AfterSchoolPickupCount.push(student);
      }
    });

    //loop through _AfterSchoolPickupCount array and push after school pickup days to __TwoDays, __ThreeDays, __FourDays, __FiveDays array
    this._AfterSchoolPickupCount.forEach(student => {
      if (student.afterSchoolProgram === '2-days') {
        this.__TwoDays.push(student);
      } else if (student.afterSchoolProgram === '3-days') {
        this.__ThreeDays.push(student);
      } else if (student.afterSchoolProgram === '4-days') {
        this.__FourDays.push(student);
      } else if (student.afterSchoolProgram === '5-days') {
        this.__FiveDays.push(student);
      }
    });

    //display after school pickup count in html
    numCount2.textContent = this.__TwoDays.length;
    numCount3.textContent = this.__ThreeDays.length;
    numCount4.textContent = this.__FourDays.length;
    numCount5.textContent = this.__FiveDays.length;

    //display numcount length multiplied by _AfterSchoolPickupFee2Days in afterSchool2Day

    const twoDaysTotal =
      this.__TwoDays.length * this._AfterSchoolPickupFee2Days;
    const threeDaysTotal =
      this.__ThreeDays.length * this._AfterSchoolPickupFee3Days;
    const fourDaysTotal =
      this.__FourDays.length * this._AfterSchoolPickupFee4Days;
    const fiveDaysTotal =
      this.__FiveDays.length * this._AfterSchoolPickupFee5Days;

    afterSchool2Day.textContent = `$ ${twoDaysTotal}`;
    afterSchool3Day.textContent = `$ ${threeDaysTotal}`;
    afterSchool4Day.textContent = `$ ${fourDaysTotal}`;
    afterSchool5Day.textContent = `$ ${fiveDaysTotal}`;

    //get total after school pickup fee
    const totalAfterSchoolPickupFee =
      twoDaysTotal + threeDaysTotal + fourDaysTotal + fiveDaysTotal;

    //get user data length from _AfterSchoolPickupCount array and store it in afterSchoolPickupCount
    afterSchoolPickupCount.innerHTML = this._AfterSchoolPickupCount.length;

    const afterSchoolPickupIncome = totalAfterSchoolPickupFee;

    const userDataLength = userData.length;

    localStorage.setItem('userDataLength', userDataLength);

    studentCount.innerHTML = localStorage.getItem('userDataLength');
    //get user data length from local storage and store it in monthlyIncomeCount

    const monthlyIncometotal = userDataLength * this._monthlyFee;

    monthlyIncomeCount.innerHTML = `
          $ ${monthlyIncometotal.toLocaleString('en-US')}`;

    //monthly income count minus monthly rent
    monthlyRentCount.innerHTML = `
          $ ${(
            afterSchoolPickupIncome +
            monthlyIncometotal -
            this._monthlyRent
          ).toLocaleString('en-US')}`;

    //monthly profit count minus monthly rent
    monthlyProfitCount.innerHTML = `
          $ ${(
            afterSchoolPickupIncome +
            monthlyIncometotal -
            this._monthlyRent
          ).toLocaleString('en-US')}`;

    //user data length mulpitly by grand opening deal
    grandOpeningDealCount.innerHTML = `
                $ ${(userDataLength * this._grandOpeningDeal).toLocaleString(
                  'en-US'
                )}`;

    //after school pickup income
    afterSchoolPickupCount1.innerHTML = `
                $ ${afterSchoolPickupIncome.toLocaleString('en-US')}`;

    //bubble chart monthly income count + after school pickup income
    bubbleChart.innerHTML = `
            $ ${(afterSchoolPickupIncome + monthlyIncometotal).toLocaleString(
              'en-US'
            )}`;

    grandOpendingCount.innerHTML = `
             ${userDataLength}`;
    studentCount2.innerHTML = `
             ${userDataLength}`;
    afterSchoolPickupCount2.innerHTML = `
              ${this._AfterSchoolPickupCount.length}
    `;
    //convert monthly income total to a percentage
    const monthlyIncomePercentage = (monthlyIncometotal / 100000) * 600;
    myChart.style.height = `${monthlyIncomePercentage * 1.1}%`;
    bubbleChart.style.height = `${monthlyIncomePercentage}%`;

    //change color of progress bar at 21% to yellow
    if (monthlyIncomePercentage > 21) {
      myChart.style.backgroundColor = '#f7b500';
    }
    //change color of progress bar at 38% to green
    if (monthlyIncomePercentage > 38) {
      myChart.style.backgroundColor = '#00b300';
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //3) Display student info Tiny Champ, Little Champ, Junior Champ
  displayStudentInfo(userData) {
    //check if user data in local storage jiujitsuProgram is equal to tiny_champion

    userData.forEach((userData, index) => {
      if (userData.jiujitsuProgram === 'tiny_champion') {
        //get child names first letter and store it in firstLetter
        //get child names last name and store it in lastName
        const firstLetter = userData.childName.charAt(0);
        const lastLetter = userData.lastName.charAt(0);

        const tinyChampHTML = `
                      <div id="tiny${index}" class="card__container tiny_champion">
                        <div class="student__card__header__tiny">
                        <p>${firstLetter} ${lastLetter}</p>
                        </div>
                          <div class="card__header">
                              <p class="textCenter">${userData.jiujitsuProgram}  </p>
                              <p> <span>Name:</span> ${userData.childName}</p>
                              </div>
                              <div class="card__body">
                              <p> <span>Perfered Schedule:</span> ${userData.childPerferedSchedule}</p>
                              <p><span>Birthday:</span> ${userData.childBirthday}</p>
                              <p><span>After School Program:</span> ${userData.afterSchoolProgram}</p>
                              <p><span>Additional Info:</span> ${userData.additionalInfo}</p>
                              <p> <span>Start date:</span> ${userData.childStartDate}</p>
                          </div>
                          <div class="color__bar"></div>
                      </div>
                  `;
        tinyChampRow.insertAdjacentHTML('beforeend', tinyChampHTML);

        //push user data into newStudentInfoTinyChamp array
        const tinyChampCount = this._newStudentInfoTinyChamp.push(userData);

        //display tiny champ count in tiny champ progress bar fill width
        progressBarFillTinyChamp.style.width = `${tinyChampCount * 5}%`;
        tinyChampProgressBarCount.innerHTML = `${tinyChampCount} /40`;
        ////////////////////////////////////////////////////////////////////
      } else if (userData.jiujitsuProgram === 'little_champion') {
        //get child names first letter and store it in firstLetter
        //get child names last name and store it in lastName
        const firstLetter = userData.childName.charAt(0);
        const lastLetter = userData.lastName.charAt(0);

        const littleChampHTML = `
                <div id="little${index}" class="card__container little_champion">
                <div class="student__card__header__little">
                <p>${firstLetter} ${lastLetter}</p>
                </div>
                    <div class="card__header">
                        <p class="textCenter">${userData.jiujitsuProgram}</p>
                        <p> <span>Name:</span> ${userData.childName}</p>
                        </div>
                        <div class="card__body">
                        <p> <span>Perfered Schedule:</span> ${userData.childPerferedSchedule}</p>
                        <p><span>Birthday:</span> ${userData.childBirthday}</p>
                        <p><span>After School Program:</span> ${userData.afterSchoolProgram}</p>
                        <p><span>Additional Info:</span> ${userData.additionalInfo}</p>
                        <p> <span>Start date:</span> ${userData.childStartDate}</p>
                    </div>
                    <div class="color__bar"></div>
                </div>
            `;
        littleChampRow.insertAdjacentHTML('beforeend', littleChampHTML);

        //push user data into newStudentInfoLittleChamp array
        const littleChampCount = this._newStudentInfoLittleChamp.push(userData);

        //display little champ count in little champ progress bar fill width
        progressBarFillLittleChamp.style.width = `${littleChampCount * 5}%`;
        littleChampProgressBarCount.innerHTML = `${littleChampCount} /40`;
        /////////////////////////////////////////////////////////////////////
      } else if (userData.jiujitsuProgram === 'junior_champion') {
        //get child names first letter and store it in firstLetter
        //get child names last name and store it in lastName
        const firstLetter = userData.childName.charAt(0);
        const lastLetter = userData.lastName.charAt(0);

        const juniorChampHTML = `
            <div id="junior${index}" class="card__container junior_champion">
            <div class="student__card__header__junior">
            <p>${firstLetter} ${lastLetter}</p>
            </div>
                <div class="card__header">
                    <p class="textCenter">${userData.jiujitsuProgram}</p>
                    <p> <span>Name:</span> ${userData.childName}</p>
                    </div>
                    <div class="card__body">
                    <p> <span>Perfered Schedule:</span> ${userData.childPerferedSchedule}</p>
                    <p><span>Birthday:</span> ${userData.childBirthday}</p>
                    <p><span>After School Program:</span> ${userData.afterSchoolProgram}</p>
                    <p><span>Additional Info:</span> ${userData.additionalInfo}</p>
                    <p> <span>Start date:</span> ${userData.childStartDate}</p>
                </div>
                <div class="color__bar"></div>
            </div>
            `;
        juniorChampRow.insertAdjacentHTML('beforeend', juniorChampHTML);

        //push user data into newStudentInfoJuniorChamp array
        const juniorChampCount = this._newStudentInfoJuniorChamp.push(userData);

        //display junior champ count in junior champ progress bar fill width
        progressBarFillJuniorChamp.style.width = `${juniorChampCount * 5}%`;
        juniorChampProgressBarCount.innerHTML = `${juniorChampCount} /40`;
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //4) Display Parents Info
  displayParentsInfo(userData) {
    //loop through user data and create parent card for each parent
    userData.forEach(parent => {
      const parentName = `
          <div class="parent__card__container">
          <div class="card__header">
            <p class="textCenter"> ${parent.childName}</p>
            <hr/>
            <p><span>First Name:</span> ${parent.firstName}</p>
            <p><span>Last Name:</span> ${parent.lastName}</p>
          </div>
          <div class="card__body">
            <p><span>Email:</span> ${parent.email}</p>
            <p><span>Phone Number:</span> ${parent.phone}</p>
            <p><span>Address:</span> ${parent.address}</p>
            <p><b>Emergency Contact Info</b></p>
            <hr/>
            <p><span>Full Name:</span> ${parent.emergencyFullName}</p>
            <p><span>Phone Number:</span> ${parent.emergencyPhone}</p>
            <p><span>Relationship:</span> ${parent.emergencyRelationship}</p>
            <p><b>Waiver Signature</b></p>
            <hr/>
            <img src="${parent.signature}"  alt="signature" width="auto" height="50" />
          </div>
        </div>
          `;
      parentsRow.insertAdjacentHTML('beforeend', parentName);
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //5)Display Credit Card Info
  displayCreditCardInfo(userData) {
    //loop through user data and create credit card card for each credit card

    userData.forEach(creditCard => {
      //if perfered payment date is equal to 1st of the month else display 15th of the month

      if (creditCard.perferedPaymentDate === '1st') {
        const creditCardHTML = `
        <div class="creditcard__card__container">
        <div class="card__header">
          <p>Credit Card Info: ${creditCard.creditCardFullName}</p>
          <p><span>Perfered Payment Date:</span> ${creditCard.perferedPaymentDate}</p>
          <hr/>
          <p><span>Credit Card Number:</span> ${creditCard.creditCardNumber}</p>
          <p><span>Credit Card Expiration:</span> ${creditCard.creditCardExpiration}</p>
        </div>
        <div class="card__body">
          <p><span>Credit Card CVV:</span> ${creditCard.creditCardCVV}</p>
        </div>
      </div>
        `;
        creditCardRow.insertAdjacentHTML('beforeend', creditCardHTML);
      } else {
        const creditCardHTML2 = `
        <div class="creditcard__card__container">
        <div class="card__header">
          <p>Credit Card Info: ${creditCard.creditCardFullName}</p>
          <p><span>Perfered Payment Date:</span> ${creditCard.perferedPaymentDate}</p>
          <hr/>
          <p><span>Credit Card Number:</span> ${creditCard.creditCardNumber}</p>
          <p><span>Credit Card Expiration:</span> ${creditCard.creditCardExpiration}</p>
        </div>
        <div class="card__body">
          <p><span>Credit Card CVV:</span> ${creditCard.creditCardCVV}</p>
        </div>
      </div>
        `;
        creditCardRow2.insertAdjacentHTML('beforeend', creditCardHTML2);
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //6) Display as Json Data
  displayJsonData(userData) {
    //convert userData to stringify
    const jsonData = JSON.stringify(userData);

    //insert json data into the json data input field
    jasonDataInput.value = jsonData;

    //display json data in the DOM
    // jsonDataRow.insertAdjacentHTML('beforeend', jsonData);

    //select json data input field on click
    copyAllButton.addEventListener('click', event => {
      event.preventDefault();
      jasonDataInput.select();
      //copy json data input field to clipboard
      navigator.clipboard.writeText(jasonDataInput.value);
    });

    // userData.forEach(data => {
    //   const jsonDataHTML = `
    //       <div class="json__card__container">
    //       <div class="card__header">
    //         {
    //           "firstName": " ${data.firstName}",
    //           "lastName": " ${data.lastName}",
    //           "email": " ${data.email}",
    //           "phone": " ${data.phone}",
    //           "address": " ${data.address}",
    //           "emergencyFullName": " ${data.emergencyFullName}",
    //           "emergencyPhone": " ${data.emergencyPhone}",
    //           "emergencyRelationship": " ${data.emergencyRelationship}",
    //           "childName": " ${data.childName}",
    //           "childBirthday": " ${data.childBirthday}",
    //           "jiujitsuProgram": " ${data.jiujitsuProgram}",
    //           "childPerferedSchedule": " ${data.childPerferedSchedule}",
    //           "childStartDate": " ${data.date}",
    //           "creditCardFullName": " ${data.creditCardFullName}",
    //           "creditCardNumber": " ${data.creditCardNumber}",
    //           "creditCardExpiration": " ${data.creditCardExpiration}",
    //           "creditCardCVV": " ${data.creditCardCVV}",
    //           "afterSchoolProgram": " ${data.afterSchoolProgram}",
    //           "perferedPaymentDate": " ${data.perferedPaymentDate}",
    //           "additionalInfo": " ${data.additionalInfo}",
    //         },
    //       </div>
    //     </div>
    //   `;
    //   jsonDataRow.insertAdjacentHTML('beforeend', jsonDataHTML);
    // });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //7) Display Tiny Champions Modal Info
  displayTinyChampModal(userData) {
    //add event listener to tiny champ card and display tiny champ info when clicked
    tinyChampRow.addEventListener('click', e => {
      const clicked = e.target.closest('.tiny_champion');

      //Guard clause
      if (!clicked) return;

      //get index of clicked tiny champ card last number
      const index = JSON.parse(clicked.id.split('tiny').slice(-1));

      //get tiny champ info from newStudentInfoTinyChamp array
      const tinyChampInfo = userData[index];

      //display tiny champ info in modal
      this.userModalUpdate(tinyChampInfo);

      //display tiny champ info in tiny champ info modal
      this.modalFunctionalUtillity();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //8) Display Little Champions Modal Info
  displayLittleChampModal(userData) {
    //add event listener to little champ card and display little champ info when clicked
    littleChampRow.addEventListener('click', e => {
      const clicked = e.target.closest('.little_champion');

      //Guard clause
      if (!clicked) return;

      //get index of clicked little champ card last number
      const index = JSON.parse(clicked.id.split('little').slice(-1));

      //get little champ info from newStudentInfoLittleChamp array
      const littleChampInfo = userData[index];

      //display little champ info in modal
      this.userModalUpdate(littleChampInfo);

      //display little champ info in little champ info modal
      this.modalFunctionalUtillity();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //9) Display Junior Champions Modal Info
  displayJuniorChampModal(userData) {
    //add event listener to junior champ card and display junior champ info when clicked
    juniorChampRow.addEventListener('click', e => {
      const clicked = e.target.closest('.junior_champion');

      //Guard clause
      if (!clicked) return;

      //get index of clicked junior champ card last number
      const index = JSON.parse(clicked.id.split('junior').slice(-1));

      //get junior champ info from newStudentInfoJuniorChamp array
      const juniorChampInfo = userData[index];

      //display junior champ info in modal
      this.userModalUpdate(juniorChampInfo);

      //display junior champ info in junior champ info modal
      this.modalFunctionalUtillity();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //10) Display Week A Students Info
  displayOptionA(userData) {
    userData.forEach((user, index) => {
      //get child names first letter and store it in firstLetter
      //get child names last name and store it in lastName
      const firstLetter = user.childName.charAt(0);
      const lastLetter = user.lastName.charAt(0);

      if (
        user.childPerferedSchedule === 'Monday - Wednesday - Friday' &&
        user.jiujitsuProgram === 'tiny_champion'
      ) {
        const optionAHTML = `
        <div id="tiny${index}" class="card__container ${user.jiujitsuProgram}">
        <div class="student__card__header__tiny">
        <p>${firstLetter} ${lastLetter}</p>
        </div>
        <div class="card__header">
            <p class="textCenter">${user.jiujitsuProgram}</p>
            <p> <span>Name:</span> ${user.childName}</p>
        </div>
        <div class="card__body">
            <p> <span>Perfered Schedule:</span> ${user.childPerferedSchedule}</p>
            <p><span>Birthday:</span> ${user.childBirthday}</p>
            <p><span>Afterschool Program:</span> ${user.afterSchoolProgram}</p>
        </div>
        <div class="color__bar"></div>
    </div>
        `;
        tinyChampRow2.insertAdjacentHTML('beforeend', optionAHTML);
      } else if (
        user.childPerferedSchedule === 'Monday - Wednesday - Friday' &&
        user.jiujitsuProgram === 'little_champion'
      ) {
        const optionAHTML = `
        <div id="little${index}" class="card__container ${user.jiujitsuProgram}">
        <div class="student__card__header__little">
        <p>${firstLetter} ${lastLetter}</p>
        </div>
        <div class="card__header">
            <p class="textCenter">${user.jiujitsuProgram}</p>
            <p> <span>Name:</span> ${user.childName}</p>
        </div>
        <div class="card__body">
            <p> <span>Perfered Schedule:</span> ${user.childPerferedSchedule}</p>
            <p><span>Birthday:</span> ${user.childBirthday}</p>
            <p><span>Afterschool Program:</span> ${user.afterSchoolProgram}</p>
        </div>
        <div class="color__bar"></div>
    </div>
        `;
        littleChampRow2.insertAdjacentHTML('beforeend', optionAHTML);
      } else if (
        user.childPerferedSchedule === 'Monday - Wednesday - Friday' &&
        user.jiujitsuProgram === 'junior_champion'
      ) {
        const optionAHTML = `
        <div id="junior${index}" class="card__container ${user.jiujitsuProgram}">
        <div class="student__card__header__junior">
        <p>${firstLetter} ${lastLetter}</p>
        </div>
        <div class="card__header">
            <p class="textCenter">${user.jiujitsuProgram}</p>
            <p> <span>Name:</span> ${user.childName}</p>
        </div>
        <div class="card__body">
            <p> <span>Perfered Schedule:</span> ${user.childPerferedSchedule}</p>
            <p><span>Birthday:</span> ${user.childBirthday}</p>
            <p><span>Afterschool Program:</span> ${user.afterSchoolProgram}</p>
        </div>
        <div class="color__bar"></div>
    </div>
        `;
        juniorChampRow2.insertAdjacentHTML('beforeend', optionAHTML);
      } else if (
        user.childPerferedSchedule === 'Tuesday - Wednesday - Thursday'
      ) {
        return;
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //11) Display Week B Students Info
  displayOptionB(userData) {
    userData.forEach((user, index) => {
      //get child names first letter and store it in firstLetter
      //get child names last name and store it in lastName
      const firstLetter = user.childName.charAt(0);
      const lastLetter = user.lastName.charAt(0);
      if (
        user.childPerferedSchedule === 'Tuesday - Thursday - Saturday' &&
        user.jiujitsuProgram === 'tiny_champion'
      ) {
        const optionBHTML = `
        <div id="tiny${index}" class="card__container ${user.jiujitsuProgram}">
        <div class="student__card__header__tiny">
        <p>${firstLetter} ${lastLetter}</p>
        </div>
        <div class="card__header">
            <p class="textCenter">${user.jiujitsuProgram}</p>
            <p> <span>Name:</span> ${user.childName}</p>
        </div>
        <div class="card__body">
            <p> <span>Perfered Schedule:</span> ${user.childPerferedSchedule}</p>
            <p><span>Birthday:</span> ${user.childBirthday}</p>
            <p><span>Afterschool Program:</span> ${user.afterSchoolProgram}</p>
        </div>
        <div class="color__bar"></div>
    </div>
        `;
        tinyChampRow3.insertAdjacentHTML('beforeend', optionBHTML);
      } else if (
        user.childPerferedSchedule === 'Tuesday - Thursday - Saturday' &&
        user.jiujitsuProgram === 'little_champion'
      ) {
        const optionBHTML = `
        <div id="little${index}" class="card__container ${user.jiujitsuProgram}">
        <div class="student__card__header__little">
        <p>${firstLetter} ${lastLetter}</p>
        </div>
        <div class="card__header">
            <p class="textCenter">${user.jiujitsuProgram}</p>
            <p> <span>Name:</span> ${user.childName}</p>
        </div>
        <div class="card__body">
            <p> <span>Perfered Schedule:</span> ${user.childPerferedSchedule}</p>
            <p><span>Birthday:</span> ${user.childBirthday}</p>
            <p><span>Afterschool Program:</span> ${user.afterSchoolProgram}</p>
        </div>
        <div class="color__bar"></div>
    </div>
        `;
        littleChampRow3.insertAdjacentHTML('beforeend', optionBHTML);
      } else if (
        user.childPerferedSchedule === 'Tuesday - Thursday - Saturday' &&
        user.jiujitsuProgram === 'junior_champion'
      ) {
        const optionBHTML = `
        <div id="junior${index}" class="card__container ${user.jiujitsuProgram}">
        <div class="student__card__header__junior">
        <p>${firstLetter} ${lastLetter}</p>
        </div>
        <div class="card__header">
            <p class="textCenter">${user.jiujitsuProgram}</p>
            <p> <span>Name:</span> ${user.childName}</p>
        </div>
        <div class="card__body">
            <p> <span>Perfered Schedule:</span> ${user.childPerferedSchedule}</p>
            <p><span>Birthday:</span> ${user.childBirthday}</p>
            <p><span>Afterschool Program:</span> ${user.afterSchoolProgram}</p>
        </div>
        <div class="color__bar"></div>
    </div>
        `;
        juniorChampRow3.insertAdjacentHTML('beforeend', optionBHTML);
      } else if (user.childPerferedSchedule === 'Monday - Wednesday - Friday') {
        return;
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //12) Form Submit add new Student Manually ***Manual Form***
  formSubmit() {
    //add event listener to form submit button
    formSubmit.addEventListener('click', e => {
      e.preventDefault();

      //get values from form
      const firstNameValue = firstName.value;
      const lastNameValue = lastName.value;
      const emailValue = email.value;
      const phoneValue = phone.value;
      const addressValue = address.value;
      const emergencyFullNameValue = emergencyFullName.value;
      const emergencyPhoneValue = emergencyPhone.value;
      const emergencyRelationshipValue = emergencyRelationship.value;
      const childNameValue = childName.value;
      const childBirthdayValue = childBirthday.value;
      const jiujitsuProgramValue = jiujitsuProgram.value;
      const childPerferedScheduleValue = childPerferedSchedule.value;
      const childStartDateValue = childStartDate.value;
      const afterSchoolProgramValue = afterSchoolProgram.value;
      const creditCardFullNameValue = creditCardFullName.value;
      const creditCardNumberValue = creditCardNumber.value;
      const creditCardExpirationValue = creditCardExpiration.value;
      const creditCardCVVValue = creditCardCVV.value;
      const perferedPaymentDateValue = perferedPaymentDate.value;
      const additionalInfoValue = additionalInfo.value;

      //create new student object
      const newStudent = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        address: addressValue,
        emergencyFullName: emergencyFullNameValue,
        emergencyPhone: emergencyPhoneValue,
        emergencyRelationship: emergencyRelationshipValue,
        childName: childNameValue,
        childBirthday: childBirthdayValue,
        jiujitsuProgram: jiujitsuProgramValue,
        childStartDate: childStartDateValue,
        afterSchoolProgram: afterSchoolProgramValue,
        childPerferedSchedule: childPerferedScheduleValue,
        creditCardFullName: creditCardFullNameValue,
        creditCardNumber: creditCardNumberValue,
        creditCardExpiration: creditCardExpirationValue,
        creditCardCVV: creditCardCVVValue,
        perferedPaymentDate: perferedPaymentDateValue,
        additionalInfo: additionalInfoValue,
      };

      //push new student to _userData array
      this._userData.push(newStudent);

      //set userData to local storage
      localStorage.setItem('userData2', JSON.stringify(this._userData));

      //get userData2 from local storage
      // const userData2 = JSON.parse(localStorage.getItem('userData2'));

      //clear input fields and checkboxes
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      emergencyFullName.value = '';
      emergencyPhone.value = '';
      emergencyRelationship.value = '';
      childName.value = '';
      childBirthday.value = '';
      jiujitsuProgram.value = '';
      childStartDate.value = '';
      childPerferedSchedule.value = '';
      afterSchoolProgram.value = '';
      creditCardFullName.value = '';
      creditCardNumber.value = '';
      creditCardExpiration.value = '';
      creditCardCVV.value = '';
      perferedPaymentDate.value = '';
      additionalInfo.value = '';

      //hides form
      this.addNewStudentClose();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //13) Add New Student Button Open Form
  addNewStudentActive() {
    //add new student button event listener
    newStudentBtn.addEventListener('click', e => {
      e.preventDefault();
      signinForm.classList.toggle('hidden');
      newSBtn.classList.toggle('buttonActive');
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //14) Add New Student Button Close Form refresh page
  addNewStudentClose() {
    // close form
    signinForm.classList.toggle('hidden');

    //remove success message  if it exists
    if (successMessage.classList.contains('success__messageActive')) {
      successMessage.classList.remove('success__messageActive');
    }
    //add success message
    successMessage.classList.add('success__messageActive');

    //smooth scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    //remove success message after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove('success__messageActive');
      //reload page
      location.reload();
    }, 2000);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //15) Toggle Tab Buttons
  tabs() {
    //Tab component
    //add event listener to tabs container
    tabsContainer.addEventListener('click', e => {
      const clicked = e.target.closest('.tab__container__header__text');

      //Guard clause
      if (!clicked) return;

      //Remove active class from all tabs
      tabs.forEach(tab => tab.classList.remove('tabActive'));
      tabsContent.forEach(content => content.classList.remove('contentActive'));

      //Add active class to clicked tab
      clicked.classList.add('tabActive');

      //Add contentActive class to content that corresponds to clicked tab
      document
        .querySelector(`.main__info__container--${clicked.dataset.tab}`)
        .classList.add('contentActive');

      //remove hidden class on dataset 4 when clicked equal to 4
      if (
        clicked.dataset.tab === '4' ||
        clicked.dataset.tab === '5' ||
        clicked.dataset.tab === '6'
      ) {
        document
          .querySelector(`.main__info__container--${clicked.dataset.tab}`)
          .classList.remove('hidden');
      }
      if (
        clicked.dataset.tab !== '4' ||
        clicked.dataset.tab !== '5' ||
        clicked.dataset.tab === '6'
      ) {
        document
          .querySelector(`.main__info__container--${clicked.dataset.tab}`)
          .classList.add('hidden');
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //16) Get user data for Student Info Modal
  userModalUpdate(studentInfo) {
    //set value for modal input fields
    firstNameModal.value = studentInfo.firstName;
    lastNameModal.value = studentInfo.lastName;
    emailModal.value = studentInfo.email;
    phoneModal.value = studentInfo.phone;
    addressModal.value = studentInfo.address;
    // waiverModal.value = studentInfo.waiver;
    emergencyFullNameModal.value = studentInfo.emergencyFullName;
    emergencyPhoneModal.value = studentInfo.emergencyPhone;
    emergencyRelationshipModal.value = studentInfo.emergencyRelationship;
    childNameModal.value = studentInfo.childName;
    childBirthdayModal.value = studentInfo.childBirthday;
    childPerferedScheduleModal.value = studentInfo.childPerferedSchedule;
    childStartDateModal.value = studentInfo.childStartDate;
    jiujitsuProgramModal.value = studentInfo.jiujitsuProgram;
    afterSchoolProgramModal.value = studentInfo.afterSchoolProgram;
    creditCardFullNameModal.value = studentInfo.creditCardFullName;
    creditCardNumberModal.value = studentInfo.creditCardNumber;
    creditCardExpirationModal.value = studentInfo.creditCardExpiration;
    creditCardCVVModal.value = studentInfo.creditCardCVV;
    perferedPaymentDateModal.value = studentInfo.perferedPaymentDate;
    additionalInfoModal.value = studentInfo.additionalInfo;
    signaturePad.value = studentInfo.signaturePad;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //17) Student Info Modal display
  modal() {
    //add event listener to modal container
    modalContainer.addEventListener('click', e => {
      const clicked = e.target.closest('.modal__close');

      //Guard clause
      if (!clicked) return;
      //add hidden class to modal container
      modalContainer.classList.add('hidden');
      //add hidden class to overlay
      overlay.classList.add('hidden');
      location.reload();
    });

    //add event listener to overlay
    // overlay.addEventListener('click', e => {
    //   const clicked = e.target.closest('.overlay');

    //   //Guard clause
    //   if (!clicked) return;
    //   //add hidden class to modal container
    //   modalContainer.classList.add('hidden');
    //   //add hidden class to overlay
    //   overlay.classList.add('hidden');
    //   location.reload();
    // });

    congratsModal.addEventListener('click', e => {
      location.reload();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //18) Student Info Modal display Form Edit ****FORM UPDATE****
  customerFormUpdateModal() {
    formUpdate.addEventListener('click', e => {
      e.preventDefault();
      //get todays date
      const today = new Date();

      //caputer customer signature
      const imageURL = signaturePad2.toDataURL('image/png');
      const image = document.createElement('img');
      image.src = imageURL;
      image.height = signaturePad2.height;
      image.width = signaturePad2.width;
      image.style.display = 'block';
      form.appendChild(image);

      //get value from input fields
      const firstNameValue = firstNameModal.value;
      const lastNameValue = lastNameModal.value;
      const emailValue = emailModal.value;
      const phoneValue = phoneModal.value;
      const addressValue = addressModal.value;
      const emergencyFullNameValue = emergencyFullNameModal.value;
      const emergencyPhoneValue = emergencyPhoneModal.value;
      const emergencyRelationshipValue = emergencyRelationshipModal.value;
      const childNameValue = childNameModal.value;
      const childBirthdayValue = childBirthdayModal.value;
      const jiujitsuProgramValue = jiujitsuProgramModal.value;
      const childStartDateValue = childStartDateModal.value;
      const childPerferedScheduleValue = childPerferedScheduleModal.value;
      const afterSchoolProgramValue = afterSchoolProgramModal.value;
      const creditCardFullNameValue = creditCardFullNameModal.value;
      const creditCardNumberValue = creditCardNumberModal.value;
      const creditCardExpirationValue = creditCardExpirationModal.value;
      const creditCardCVVValue = creditCardCVVModal.value;
      const perferedPaymentDateValue = perferedPaymentDateModal.value;
      const additionalInfoValue = additionalInfoModal.value;
      const signatureValue = image.src;

      //create new customer object
      const newCustomer = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        address: addressValue,
        emergencyFullName: emergencyFullNameValue,
        emergencyPhone: emergencyPhoneValue,
        emergencyRelationship: emergencyRelationshipValue,
        childName: childNameValue,
        childBirthday: childBirthdayValue,
        jiujitsuProgram: jiujitsuProgramValue,
        childStartDate: childStartDateValue,
        childPerferedSchedule: childPerferedScheduleValue,
        afterSchoolProgram: afterSchoolProgramValue,
        creditCardFullName: creditCardFullNameValue,
        creditCardNumber: creditCardNumberValue,
        creditCardExpiration: creditCardExpirationValue,
        creditCardCVV: creditCardCVVValue,
        perferedPaymentDate: perferedPaymentDateValue,
        additionalInfo: additionalInfoValue,
        signature: signatureValue,
        date: today,
      };

      //push to _userdatamodal
      this._userDataModal.push(newCustomer);

      console.log(this._userDataModal);

      //set local storage
      localStorage.setItem('userData3', JSON.stringify(this._userDataModal));

      //get local storage
      const userData3 = JSON.parse(localStorage.getItem('userData3'));

      //get the last item in the array
      const lastStudent = userData3[userData3.length - 1];

      //display student name in congrats container
      congratsStudentEnrollmentName.textContent = `${lastStudent.childName}`;
      congratsStudentEnrollmentProgram.textContent = `${lastStudent.jiujitsuProgram}`;
      ////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////

      //get local storage user data2
      const userData2 = JSON.parse(localStorage.getItem('userData2'));

      //set userData2 to userData4
      const userData4 = userData2;

      console.log(userData4);

      // find matching student credit card name in userData4 to lastStudent
      const matchingStudent = userData4.find(
        student =>
          student.creditCardFullName === lastStudent.creditCardFullName &&
          student.creditCardNumber === lastStudent.creditCardNumber
      );

      //get index of matching student
      const index = userData4.indexOf(matchingStudent);

      //remove matching student from userData4
      userData4.splice(index, 1);
      //push laststudent to userData4
      userData4.push(lastStudent);
      //set userData4 to local storage userData4
      localStorage.setItem('userData4', JSON.stringify(userData4));

      //set userData4 to local storage userData2
      localStorage.setItem('userData2', JSON.stringify(userData4));

      ////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////

      //add hidden class to modal container
      modalContainer.classList.add('hidden');
      //add congrats modal active class
      congratsModal.classList.add('congrats__modal__active');

      //clear input values
      firstNameModal.value = '';
      lastNameModal.value = '';
      emailModal.value = '';
      phoneModal.value = '';
      addressModal.value = '';
      emergencyFullNameModal.value = '';
      emergencyPhoneModal.value = '';
      emergencyRelationshipModal.value = '';
      childNameModal.value = '';
      childBirthdayModal.value = '';
      jiujitsuProgramModal.value = '';
      // childStartDateModal.value = '';
      childPerferedScheduleModal.value = '';
      afterSchoolProgramModal.value = '';
      creditCardFullNameModal.value = '';
      creditCardNumberModal.value = '';
      creditCardExpirationModal.value = '';
      creditCardCVVModal.value = '';
      perferedPaymentDateModal.value = '';
      additionalInfoModal.value = '';

      // //remove canvas signature pad from DOM after submit
      signaturePad.remove();
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //19) Export User Data to CSV
  exportUserData(userData) {
    exportButtonContainer.addEventListener('click', e => {
      const clicked = e.target.closest('.export__button');

      //Guard clause
      if (!clicked) return;

      const csvString = [
        userData.map(user => {
          return Object.values(user).join(',');
        }),
      ].join('\n');

      // CREATE BLOB OBJECT
      const myBlob = new Blob([csvString], { type: 'text/csv' });
      //set encoded uri to csv download links href attribute

      const url = window.URL.createObjectURL(myBlob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'data.csv';
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //20) Show Date and Time
  showTime() {
    var clock = new Vue({
      el: '#clock',
      data: {
        time: '',
        date: '',
      },
    });

    var week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var timerID = setInterval(updateTime, 1000);
    updateTime();
    function updateTime() {
      var cd = new Date();
      clock.time =
        zeroPadding(cd.getHours(), 2) +
        ':' +
        zeroPadding(cd.getMinutes(), 2) +
        ':' +
        zeroPadding(cd.getSeconds(), 2);
      clock.date =
        zeroPadding(cd.getFullYear(), 4) +
        '-' +
        zeroPadding(cd.getMonth() + 1, 2) +
        '-' +
        zeroPadding(cd.getDate(), 2) +
        ' ' +
        week[cd.getDay()];
    }

    function zeroPadding(num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //21) Display Week A Student Count
  displayOptionACount(userData) {
    userData.forEach(user => {
      if (user.childPerferedSchedule === 'Monday - Wednesday - Friday') {
        this._optionACount.push(user);

        //get length of array and display in DOM
        optionA.innerHTML = this._optionACount.length;
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //23) Display Week B Student Count
  displayOptionBCount(userData) {
    userData.forEach(user => {
      if (user.childPerferedSchedule === 'Tuesday - Thursday - Saturday') {
        this._optionBCount.push(user);

        //get length of array and display in DOM
        optionB.innerHTML = this._optionBCount.length;
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //24) Display Inspirational Quote from API
  inspirationalQuoteGenerator() {
    //async and await function to fetch data from API
    const getQuote = async () => {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      return data;
    };
    //call function
    getQuote()
      .then(data => {
        //get random number
        const randomNumber = Math.floor(Math.random() * data.length);
        //get random quote
        const randomQuote = data[randomNumber].text;
        //get random author
        const randomAuthor = data[randomNumber].author;
        //display quote in dashboard daily quote section
        const quoteHTML = `
        <div class="inspirational__quote">
        <p><i>quote of the day</i></p>
        <p>
          ${randomQuote}
        </p>
        <p>- ${randomAuthor}</p>
      </div>
        `;
        dashboardDailyQuote.insertAdjacentHTML('beforeend', quoteHTML);
      })
      .catch(err => {
        console.log(err);
      });

    // fetch('https://type.fit/api/quotes')
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     //get random quote from array
    //     const randomQuote = data[Math.floor(Math.random() * data.length)];
    //     //display quote in dashboard daily quote section
    //     const quoteHTML = `
    //     <div class="inspirational__quote">
    //     <p><i>quote of the day</i></p>
    //     <p>
    //       ${randomQuote.text}
    //     </p>
    //     <p>- ${randomQuote.author}</p>
    //   </div>
    //     `;
    //     dashboardDailyQuote.insertAdjacentHTML('beforeend', quoteHTML);
    //   });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //25) Dark Mode Toggle
  darkMode() {
    toggleContainer.addEventListener('click', e => {
      const clicked = e.target.closest('.onoffswitch-checkbox');

      //Guard clause
      if (!clicked) return;

      //switch class dark-switch to light-switch on click
      if (clicked.classList.contains('dark-switch')) {
        clicked.classList.remove('dark-switch');
        clicked.classList.add('light-switch');
      } else {
        clicked.classList.remove('light-switch');
        clicked.classList.add('dark-switch');
      }

      // toggle dark-theme-card class to foreach count__container on click
      //toggle dark-theme-body class to body on click

      document.querySelector('body').classList.toggle('dark-theme-body');

      countContainer.forEach(container => {
        container.classList.toggle('dark-theme-card');
      });
      monthlyIncomeContainer.classList.toggle('dark-theme-card');
      monthlyRentContainer.classList.toggle('dark-theme-card');
      section3Container.classList.toggle('dark-theme-card');

      progressBarProgram.forEach(bar => {
        bar.classList.toggle('dark-theme-card');
      });

      tabsContent.forEach(content => {
        content.classList.toggle('dark-theme-card');
      });

      tabs.forEach(tab => {
        tab.classList.toggle('dark-theme-card');
      });
      section1.classList.toggle('dark-theme-card');
      newSBtn.classList.toggle('dark-theme-box-shadow');
      exportUserData.classList.toggle('dark-theme-box-shadow');
      formSubmit.classList.toggle('dark-theme-box-shadow');
      monthlyProfitContainer.classList.toggle('dark-theme-card');
      section6Container.classList.toggle('dark-theme-card');
      grandOpeningDealContainer.classList.toggle('dark-theme-card');
      afterSchoolPickupContainer.classList.toggle('dark-theme-card');
      customerSignUpForm.classList.toggle('dark-theme-card');
      // customerSignupFormToggle.classList.toggle('dark-theme-box-shadow');
      backButtonStep2.classList.toggle('dark-theme-box-shadow');
      backButtonStep3.classList.toggle('dark-theme-box-shadow');
      backButtonStep4.classList.toggle('dark-theme-box-shadow');

      //toggle cardContainer styling on click
      document.querySelectorAll('.tiny_champion').forEach(container => {
        container.classList.toggle('dark-theme-card');
      });
      document.querySelectorAll('.little_champion').forEach(container => {
        container.classList.toggle('dark-theme-card');
      });
      document.querySelectorAll('.junior_champion').forEach(container => {
        container.classList.toggle('dark-theme-card');
      });
      document
        .querySelectorAll('.parent__card__container')
        .forEach(container => {
          container.classList.toggle('dark-theme-card');
        });
      document
        .querySelectorAll('.creditcard__card__container')
        .forEach(container => {
          container.classList.toggle('dark-theme-card');
        });
      document
        .querySelector('.modal__container')
        .classList.toggle('dark-theme-card');
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //26) Display Perfered Date
  displayPerferedPaymentDate() {
    //get year and month from date
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    //get day from date
    const day = date.getDate();
    // if day is equal to first of the month css change display to block
    if (day === 1) {
      firstOfTheMonth.style.display = 'block';
    } else {
      firstOfTheMonth.style.display = 'none';
    }

    if (day === 15) {
      fifteenthOfTheMonth.style.display = 'block';
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //27) Hides and Show Student info in Modal
  modalFunctionalUtillity() {
    modalContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // inputDisabled.forEach(input => {
    //   input.disabled = true;
    // });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  //28) Toggle Customer Signup Form
  displayCustomerSignUpForm() {
    customerSignupFormToggle.addEventListener('click', e => {
      e.preventDefault();
      //toggle display customer signup form and hide dashboard
      customerSignUpFormContatiner.classList.toggle('hidden');
      dashboard.classList.toggle('hidden');

      //if dashboard does not have hidden class reload page
      if (!dashboard.classList.contains('hidden')) {
        location.reload();
      }
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //29) Customer Signup Form step Functionalities
  customerSignupForm() {
    customerFormContainerSubmit.addEventListener('click', e => {
      const clicked = e.target.closest('.steps__count');

      //Guard clause
      if (!clicked) return;

      //if clicked on step 1 button then display step 2 button
      if (clicked.classList.contains('step__1__button')) {
        //remove active class from steps 1
        step1Button.classList.remove('stepActive');
        step1.classList.remove('customerBodyActive');
        step2Button.classList.remove('hidden');
        backButtonStep2.classList.remove('hidden');

        //add active class to step 2
        step2Button.classList.add('stepActive');
        step2.classList.add('customerBodyActive');
        step1Button.classList.add('hidden');

        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////
      } else if (clicked.classList.contains('step__2__button')) {
        //remove active class from steps 2
        step2Button.classList.remove('stepActive');
        step2.classList.remove('customerBodyActive');
        step3Button.classList.remove('hidden');
        backButtonStep3.classList.remove('hidden');

        //add active class to step 3
        backButtonStep2.classList.add('hidden');
        step3Button.classList.add('stepActive');
        step3.classList.add('customerBodyActive');
        step2Button.classList.add('hidden');
        step1Button.classList.add('hidden');

        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////
      } else if (clicked.classList.contains('step__3__button')) {
        //remove active class from steps 3
        step3Button.classList.remove('stepActive');
        step3.classList.remove('customerBodyActive');
        step4Button.classList.remove('hidden');
        backButtonStep4.classList.remove('hidden');

        //add active class to step 4
        step4Button.classList.add('stepActive');
        step4.classList.add('customerBodyActive');
        step3Button.classList.add('hidden');
        backButtonStep2.classList.add('hidden');
        backButtonStep3.classList.add('hidden');

        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
      } else if (clicked.classList.contains('step__4__button')) {
        //remove active class from steps 4
        step4Button.classList.remove('stepActive');
        step4.classList.remove('customerBodyActive');
        step5Button.classList.remove('hidden');
        backButtonStep5.classList.remove('hidden');

        //add active class to step 5
        step5Button.classList.add('stepActive');
        step5.classList.add('customerBodyActive');
        step4Button.classList.add('hidden');
        backButtonStep2.classList.add('hidden');
        backButtonStep3.classList.add('hidden');
        backButtonStep4.classList.add('hidden');

        /////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////
      }
    });

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    //add event listener to back button
    backButtonStep2.addEventListener('click', e => {
      //remove active class from steps 2
      step2Button.classList.remove('stepActive');
      step2.classList.remove('customerBodyActive');
      step1Button.classList.remove('hidden');

      //add active class to step 1
      step1Button.classList.add('stepActive');
      step1.classList.add('customerBodyActive');
      step2Button.classList.add('hidden');
      backButtonStep2.classList.add('hidden');
    });

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    //add event listener to back button
    backButtonStep3.addEventListener('click', e => {
      //remove active class from steps 3
      step3Button.classList.remove('stepActive');
      step3.classList.remove('customerBodyActive');
      step2Button.classList.remove('hidden');
      backButtonStep2.classList.remove('hidden');

      //add active class to step 2
      step2Button.classList.add('stepActive');
      step2.classList.add('customerBodyActive');
      step3Button.classList.add('hidden');
      backButtonStep3.classList.add('hidden');
    });

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    //add event listener to back button
    backButtonStep4.addEventListener('click', e => {
      //remove active class from steps 4
      step4Button.classList.remove('stepActive');
      step4.classList.remove('customerBodyActive');
      step3Button.classList.remove('hidden');
      backButtonStep3.classList.remove('hidden');

      //add active class to step 3
      step3Button.classList.add('stepActive');
      step3.classList.add('customerBodyActive');
      step4Button.classList.add('hidden');
      backButtonStep2.classList.add('hidden');
      backButtonStep4.classList.add('hidden');
    });
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    //add event listener to back button
    backButtonStep5.addEventListener('click', e => {
      //remove active class from steps 5
      step5Button.classList.remove('stepActive');
      step5.classList.remove('customerBodyActive');
      step4Button.classList.remove('hidden');
      backButtonStep4.classList.remove('hidden');

      //add active class to step 4
      step4Button.classList.add('stepActive');
      step4.classList.add('customerBodyActive');
      step5Button.classList.add('hidden');
      backButtonStep2.classList.add('hidden');
      backButtonStep3.classList.add('hidden');
      backButtonStep5.classList.add('hidden');
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  //30) get Signature form pad
  customerSignature() {
    const canvas = document.getElementById('signature-pad');
    const signaturePad = new SignaturePad(canvas);
  }
  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  //31) get Signature form pad Modal
  customerSignatureModal() {
    const canvas2 = document.getElementById('signature-pad2');
    const signaturePad2 = new SignaturePad(canvas2);
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  //32) Customer Form Submit **Form Submit**
  customerFormSubmit() {
    customerFormSubmit.addEventListener('click', e => {
      e.preventDefault();

      //remove hidden class from congrats container
      congratsContainer.classList.remove('hidden');

      //get todays date
      const today = new Date();

      //caputer customer signature
      const imageURL = signaturePad.toDataURL('image/png');
      const image = document.createElement('img');
      image.src = imageURL;
      image.height = signaturePad.height;
      image.width = signaturePad.width;
      image.style.display = 'block';
      form.appendChild(image);

      //get values from form
      const firstNameValue = firstNameCustomer.value;
      const lastNameValue = lastNameCustomer.value;
      const emailValue = emailCustomer.value;
      const phoneValue = phoneCustomer.value;
      const addressValue = addressCustomer.value;
      const emergencyFullNameValue = emergencyFullNameCustomer.value;
      const emergencyPhoneValue = emergencyPhoneCustomer.value;
      const emergencyRelationshipValue = emergencyRelationshipCustomer.value;
      const childNameValue = childNameCustomer.value;
      const childBirthdayValue = childBirthdayCustomer.value;
      const jiujitsuProgramValue = jiujitsuProgramCustomer.value;
      const childPerferedScheduleValue = childPerferedScheduleCustomer.value;
      const childStartDateValue = today;
      const afterSchoolProgramValue = afterSchoolProgramCustomer.value;
      const creditCardFullNameValue = creditCardFullNameCustomer.value;
      const creditCardNumberValue = creditCardNumberCustomer.value;
      const creditCardExpirationValue = creditCardExpirationCustomer.value;
      const creditCardCVVValue = creditCardCVVCustomer.value;
      const perferedPaymentDateValue = perferedPaymentDateCustomer.value;
      const additionalInfoValue = additionalInfoCustomer.value;
      const signatureValue = image.src;

      //create new student object
      const newStudent = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        address: addressValue,
        // waiver: waiverValue,
        emergencyFullName: emergencyFullNameValue,
        emergencyPhone: emergencyPhoneValue,
        emergencyRelationship: emergencyRelationshipValue,
        childName: childNameValue,
        childBirthday: childBirthdayValue,
        jiujitsuProgram: jiujitsuProgramValue,
        childPerferedSchedule: childPerferedScheduleValue,
        childStartDate: childStartDateValue,
        afterSchoolProgram: afterSchoolProgramValue,
        creditCardFullName: creditCardFullNameValue,
        creditCardNumber: creditCardNumberValue,
        creditCardExpiration: creditCardExpirationValue,
        creditCardCVV: creditCardCVVValue,
        perferedPaymentDate: perferedPaymentDateValue,
        additionalInfo: additionalInfoValue,
        signature: signatureValue,
      };

      console.log(newStudent);

      //push new student to _userData array
      this._userData.push(newStudent);

      //set userData to local storage
      localStorage.setItem('userData2', JSON.stringify(this._userData));

      //get userData2 from local storage
      const userData2 = JSON.parse(localStorage.getItem('userData2'));

      const lastStudent = userData2[userData2.length - 1];
      //display student name in congrats container
      studentEnrollmentName.textContent = `${lastStudent.childName}`;
      studentEnrollmentProgram.textContent = `${lastStudent.jiujitsuProgram}`;

      //clear values from form
      firstNameCustomer.value = '';
      lastNameCustomer.value = '';
      emailCustomer.value = '';
      phoneCustomer.value = '';
      addressCustomer.value = '';
      // waiverCustomer.value = '';
      emergencyFullNameCustomer.value = '';
      emergencyPhoneCustomer.value = '';
      emergencyRelationshipCustomer.value = '';
      childNameCustomer.value = '';
      childBirthdayCustomer.value = '';
      jiujitsuProgramCustomer.value = '';
      childPerferedScheduleCustomer.value = '';
      // childStartDateCustomer.value = '';
      afterSchoolProgramCustomer.value = '';
      creditCardFullNameCustomer.value = '';
      creditCardNumberCustomer.value = '';
      creditCardExpirationCustomer.value = '';
      creditCardCVVCustomer.value = '';
      perferedPaymentDateCustomer.value = '';
      additionalInfoCustomer.value = '';

      //clear signature pad
      // signaturePad.clear();
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  //33) Display Student Enrollment Info for monthly repots
  displayMonthlyReport() {
    //get userData2 from local storage
    const userData2 = JSON.parse(localStorage.getItem('userData2'));

    //push userData2 to _MonthlyReport array
    this._MonthlyReport.push(userData2);

    //get the last array in _MonthlyReport array
    const lastMonth = this._MonthlyReport[this._MonthlyReport.length - 1];
    console.log(lastMonth);

    //on the first of every month push a new userData2 to _MonthlyReport array
    const monthlyReportHTML = `
    <div class="monthly__report__card">
      <div class="card__header">
        <p></p>
        <hr/>
      </div>
      <div class="card__body">
        <p><span>Student Count: </span> </p>
        <hr/>
        <p><span>After School Pickup Service Count: </span>  </p>
      </div>
    </div>
    `;
    monthlyReportRow.insertAdjacentHTML('beforeend', monthlyReportHTML);
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
}

const app = new App();
