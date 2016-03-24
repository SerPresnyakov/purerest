declare module toastr {

  interface IToastrService {
    clear: () => void
    success(message: string, title?: string): void
    info(message: string, title?: string): void
    warning(message: string, title?: string): void
    error(message: string, title?: string): void
  }

  interface IToastrConfig {
    autoDismiss?: boolean
    containerId?: string
    maxOpened?: number
    newestOnTop?: boolean
    positionClass?: string,
    preventDuplicates?: boolean
    preventOpenDuplicates?: boolean
    target?: string
    allowHtml?: boolean
    closeButton?: boolean
    closeHtml?: string
    extendedTimeOut?: number
    iconClasses?: {
      error?: string
      info?: string
      success?: string
      warning?: string
    }
    messageClass?: string
    onHidden?: Function
    onShown?: Function
    onTap?: Function
    progressBar?: boolean
    tapToDismiss?: boolean
    templates?:  {
      toast: string
      progressbar: string
    }
    timeOut?: number
    titleClass?: string
    toastClass?: string
  }

}
