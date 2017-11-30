document.addEventListener(
  "DOMContentLoaded",
  () => {
    const $input = document.querySelector("#input")
    const $output = document.querySelector("#output")
    const $btn = document.querySelector("#btn")

    new Clipboard($btn)

    const upperCase = str => str.replace(/[a-z]/g, e => e.toLocaleUpperCase())
    const replace = str => str.replace(/\d{2,}/g, e => Number(e).toString(16))

    $input.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        const val = $input.value.trim()
        if (!val) return
        $output.innerText = replace(md5(upperCase(val))).substr(-12)
        $btn.click()
      }
    }, false)
  },
  false
)
