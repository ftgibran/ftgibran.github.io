export default (input) => {
  return `<api-request
  :resource="myResource"
  effect="${input.effect}"
  spinner="${input.spinner}"
  spinner-color="${input.spinnerColor}"
  spinner-padding="${input.spinnerPadding}"
  :spinner-scale="${input.spinnerScale}"
>
  <!--My stuffs to be shown-->
</api-request>
  `
}
