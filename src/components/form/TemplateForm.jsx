import React, { memo, useCallback, useState } from "react";
import { initialTextValue, SELECT_VALUES } from "../../const";
import { TemplateButton } from "../button";
import { SelectBox } from "./SelectBox";
import { TextFields } from "./TextFields";


export const TemplateForm = memo(() => {
  /** SelectBox についての state */
  const [selectValue, setSelectValue] = useState(SELECT_VALUES[1]);
  /** TextFields についての state */
  const [textValue, setTextValue] = useState(initialTextValue);
  /** button　についての　state
   * フォームが空の時、ボタンを押下できないようにする
   */
  const [disable, setDisable] = useState(true);

  /** SelectBox の値の管理 */
  const handleChangeSelect = useCallback((event) => {
    setSelectValue({
      value: event.target.value,
      label: event.target.value,
    });
    setTextValue(initialTextValue);
  }, []);

  /** TextFields の値の管理 */
  const handleChangeText = useCallback((event) => {
    setTextValue((textValue) => ({
      ...textValue,
      [event.target.name]: event.target.value,
    }))
  }, []);

  console.log(textValue);

    /** 全てのボタンの挙動の管理  */
  const handleClickButton = useCallback(() => {
    alert(`${selectValue.value}: ${textValue[selectValue.value]}`);
  }, [selectValue, textValue]);



  function handleChange(event) {
    setDisable(event.target.value === "");
  }


  return (
    <>
      <SelectBox
        items={SELECT_VALUES}
        handleChange={handleChangeSelect}
        selectValue={selectValue}
      />
      <TextFields
        title={selectValue.label}
        textValue={textValue}
        handleChange={handleChangeText}
      />
      <TemplateButton
        title={selectValue}
        outputValue={textValue}
        handleClick={handleClickButton}

      />

            <div>
        Password: <input onChange={handleChange} /> <br />
        <button disabled={disable}>Reset</button>
      </div>
    </>
  );
});
