import { useEffect, useState } from 'react';
import Input from '../../components/common/input/Input';
import Select from '../../components/common/select/Select';
import CardPreview from '../../components/cardPreview/CardPreview';
import { ICardInfo, IErrorMessage } from '../../types/type';
import NewCardInputSection from '../../components/newCardInputSection/NewCardInputSection';
import { NewCardContainer } from './NewCardPage.styled';
import {
  validateCVC,
  validateCardCompany,
  validateCardExpiration,
  validateCardNumber,
  validatePassword,
  validateUserName,
} from '../../validators/newCardInputValidator';
import { CARD_FORM_INPUTS } from '../../constants/setting';

const NewCardPage = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: ['', '', '', ''],
    cardCompany: '',
    cardExpiration: ['', ''],
    userName: '',
    cvc: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    cardNumbers: ['', '', '', ''],
    cardCompany: [''],
    cardExpiration: ['', ''],
    userName: [''],
    cvc: [''],
    password: [''],
  });
  const [creationStage, setCreationStage] = useState(1);

  useEffect(() => {
    updateCardCompanyVisibility();
  }, [cardInfo.cardNumbers]);

  useEffect(() => {
    updateCardExpirationVisibility();
  }, [cardInfo.cardCompany]);

  useEffect(() => {
    updateUserNameVisibility();
  }, [cardInfo.cardExpiration]);

  useEffect(() => {
    updateCVCVisibility();
  }, [cardInfo.userName]);

  useEffect(() => {
    updatePasswordVisibility();
  }, [cardInfo.cvc]);

  const handleCardNumbersChange = (value: string, index: number) => {
    const errorMessageCopy = [...errorMessage.cardNumbers];
    errorMessageCopy[index] = validateCardNumber(value);

    setErrorMessage({
      ...errorMessage,
      cardNumbers: [
        errorMessageCopy[0],
        errorMessageCopy[1],
        errorMessageCopy[2],
        errorMessageCopy[3],
      ],
    });

    if (errorMessageCopy[index] === '') {
      const newCardNumbers = [...cardInfo.cardNumbers];
      newCardNumbers[index] = value;
      setCardInfo({
        ...cardInfo,
        cardNumbers: [
          newCardNumbers[0],
          newCardNumbers[1],
          newCardNumbers[2],
          newCardNumbers[3],
        ],
      });
    }
  };

  const updateCardCompanyVisibility = () => {
    const isAllEntered = cardInfo.cardNumbers.every(
      (element) => element.length === 4,
    );
    const isValidValue = errorMessage.cardNumbers.every(
      (element) => element === '',
    );

    if (isAllEntered && isValidValue && creationStage < 2) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleCardCompanyChange = (value: string) => {
    const errorMessageCopy = validateCardCompany(value);

    setErrorMessage({
      ...errorMessage,
      userName: [errorMessageCopy],
    });

    setCardInfo({
      ...cardInfo,
      cardCompany: value,
    });
  };

  const updateCardExpirationVisibility = () => {
    if (cardInfo.cardCompany !== '' && creationStage < 3) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleCardExpirationChange = (value: string, index: number) => {
    const errorMessageCopy = [...errorMessage.cardExpiration];
    errorMessageCopy[index] = validateCardExpiration(value, index);

    setErrorMessage({
      ...errorMessage,
      cardExpiration: [errorMessageCopy[0], errorMessageCopy[1]],
    });

    if (errorMessageCopy[index] === '') {
      const newCardExpiration = [...cardInfo.cardExpiration];
      newCardExpiration[index] = value;

      setCardInfo({
        ...cardInfo,
        cardExpiration: [newCardExpiration[0], newCardExpiration[1]],
      });
    }
  };

  const updateUserNameVisibility = () => {
    const isAllEntered = cardInfo.cardExpiration.every(
      (element) => element.length == 2,
    );
    const isValidValue = errorMessage.cardExpiration.every(
      (element) => element === '',
    );

    if (isAllEntered && isValidValue && creationStage < 4) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleUserNameChange = (value: string) => {
    const errorMessageCopy = validateUserName(value);

    setErrorMessage({
      ...errorMessage,
      userName: [errorMessageCopy],
    });

    if (errorMessageCopy === '') {
      setCardInfo({
        ...cardInfo,
        userName: value.toUpperCase(),
      });
    }
  };

  const updateCVCVisibility = () => {
    if (cardInfo.userName !== '' && creationStage < 5) {
      setCreationStage(creationStage + 1);
    }
  };

  const handleCVCChange = (value: string) => {
    const errorMessageCopy = validateCVC(value);

    setErrorMessage({
      ...errorMessage,
      cvc: [errorMessageCopy],
    });

    if (errorMessageCopy === '') {
      setCardInfo({
        ...cardInfo,
        cvc: value,
      });
    }
  };

  const updatePasswordVisibility = () => {
    if (cardInfo.cvc !== '' && creationStage < 6) {
      setCreationStage(creationStage + 1);
    }
  };

  const handlePasswordChange = (value: string) => {
    const erroMessageCopy = validatePassword(value);

    setErrorMessage({
      ...errorMessage,
      password: [erroMessageCopy],
    });

    if (erroMessageCopy === '') {
      setCardInfo({
        ...cardInfo,
        password: value,
      });
    }
  };

  return (
    <NewCardContainer>
      <CardPreview cardInfo={cardInfo}></CardPreview>
      <NewCardInputSection
        label={CARD_FORM_INPUTS.CARD_NUMBERS.LABEL}
        mainText={CARD_FORM_INPUTS.CARD_NUMBERS.MAIN_TEXT}
        subText={CARD_FORM_INPUTS.CARD_NUMBERS.SUB_TEXT}
        errorMessage={errorMessage.cardNumbers}
      >
        {cardInfo.cardNumbers.map((_, index) => (
          <Input
            key={index}
            maxLength={CARD_FORM_INPUTS.CARD_NUMBERS.MAX_LENGTH}
            placeholder={CARD_FORM_INPUTS.CARD_NUMBERS.PLACEHOLDER}
            isError={!!errorMessage.cardNumbers[index]}
            onChange={(e) => handleCardNumbersChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>
      {creationStage >= 2 && (
        <NewCardInputSection
          label={CARD_FORM_INPUTS.CARD_COMPANY.LABEL}
          mainText={CARD_FORM_INPUTS.CARD_COMPANY.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.CARD_COMPANY.SUB_TEXT}
        >
          <Select
            options={CARD_FORM_INPUTS.CARD_COMPANY.OPTIONS}
            onChange={(e) => handleCardCompanyChange(e.target.value)}
            value={cardInfo.cardCompany}
          ></Select>
        </NewCardInputSection>
      )}
      {creationStage >= 3 && (
        <NewCardInputSection
          label={CARD_FORM_INPUTS.CARD_EXPIRATION.LABEL}
          mainText={CARD_FORM_INPUTS.CARD_EXPIRATION.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.CARD_EXPIRATION.SUB_TEXT}
          errorMessage={errorMessage.cardExpiration}
        >
          {cardInfo.cardExpiration.map((_, index) => (
            <Input
              key={index}
              maxLength={CARD_FORM_INPUTS.CARD_EXPIRATION.MAX_LENGTH}
              placeholder={
                index === 0
                  ? CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.MONTH
                  : CARD_FORM_INPUTS.CARD_EXPIRATION.PLACEHOLDER.YEAR
              }
              isError={!!errorMessage.cardExpiration[index]}
              onChange={(e) =>
                handleCardExpirationChange(e.target.value, index)
              }
            ></Input>
          ))}
        </NewCardInputSection>
      )}
      {creationStage >= 4 && (
        <NewCardInputSection
          label={CARD_FORM_INPUTS.USER_NAME.LABEL}
          mainText={CARD_FORM_INPUTS.USER_NAME.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.USER_NAME.SUB_TEXT}
          errorMessage={errorMessage.userName}
        >
          <Input
            value={cardInfo.userName}
            maxLength={CARD_FORM_INPUTS.USER_NAME.MAX_LENGTH}
            placeholder={CARD_FORM_INPUTS.USER_NAME.PLACEHOLDER}
            isError={!!errorMessage.userName[0]}
            onChange={(e) => handleUserNameChange(e.target.value)}
          ></Input>
        </NewCardInputSection>
      )}
      {creationStage >= 5 && (
        <NewCardInputSection
          label={CARD_FORM_INPUTS.CVC.LABEL}
          mainText={CARD_FORM_INPUTS.CVC.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.CVC.SUB_TEXT}
          errorMessage={errorMessage.cvc}
        >
          <Input
            maxLength={CARD_FORM_INPUTS.CVC.MAX_LENGTH}
            placeholder={CARD_FORM_INPUTS.CVC.PLACEHOLDER}
            isError={!!errorMessage.cvc[0]}
            onChange={(e) => handleCVCChange(e.target.value)}
          ></Input>
        </NewCardInputSection>
      )}
      {creationStage >= 6 && (
        <NewCardInputSection
          label={CARD_FORM_INPUTS.PASSWORD.LABEL}
          mainText={CARD_FORM_INPUTS.PASSWORD.MAIN_TEXT}
          subText={CARD_FORM_INPUTS.PASSWORD.SUB_TEXT}
          errorMessage={errorMessage.password}
        >
          <Input
            type='password'
            value={cardInfo.password}
            maxLength={CARD_FORM_INPUTS.PASSWORD.MAX_LENGTH}
            placeholder={CARD_FORM_INPUTS.PASSWORD.PLACEHOLDER}
            isError={!!errorMessage.password[0]}
            onChange={(e) => handlePasswordChange(e.target.value)}
          ></Input>
        </NewCardInputSection>
      )}
    </NewCardContainer>
  );
};

export default NewCardPage;
