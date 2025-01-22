type Join<K, P> = K extends string | number ?
  P extends string | number ?
    `${K}${'' extends P ? '' : '-'}${P}`
    : never 
  : never;

type ExtractKeys<T> = keyof T extends string | number ? keyof T : never;

type ColorPaths<T, P extends string | number = ''> = T extends object
  ? { [K in ExtractKeys<T>]: K extends 'DEFAULT'
      ? P extends '' ? `${K & string}` : P
      : K extends string | number
      ? P extends ''
        ? ColorPaths<T[K], K>
        : ColorPaths<T[K], Join<P, K>>
      : never
    }[ExtractKeys<T>]
  : P;

type Colors = {
  background: string
  foreground: string
  card: {
    DEFAULT: string
    foreground: string
  }
  popover: {
    DEFAULT: string
    foreground: string
  }
  gradient: {
    '1': string
    '2': string
    '3': string
    '4': string
    '5': string
    '6': string
  }
  primary: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    foreground: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    fixed: {
      DEFAULT: string
      dim: string
    }
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  secondary: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    foreground: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    fixed: {
      DEFAULT: string
      dim: string
    }
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  tertiary: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    fixed: {
      DEFAULT: string
      dim: string
    }
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  success: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  info: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  warning: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  danger: {
    DEFAULT: string
    accent: string
    border: string
    card: string
    chart: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
    }
    container: string
    input: string
    muted: string
    popover: string
    ring: string
    secondary: string
    vibrant: string
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
    '700': string
    '800': string
    '900': string
  }
  surface: {
    DEFAULT: string
    bright: string
    dim: string
    container: {
      DEFAULT: string
      lowest: string
      low: string
      high: string
      highest: string
    }
    tint: string
    variant: string
  }
  error: {
    DEFAULT: string
    container: string
  }
  outline: {
    DEFAULT: string
    variant: string
  }
  scrim: string
  shadow: string
  ring: {
    DEFAULT: string
    base: string
    offset: string
  }
  inverse: {
    surface: string
    primary: string
    'on-surface': string
  }
  muted: {
    DEFAULT: string
    foreground: string
  }
  accent: {
    DEFAULT: string
    foreground: string
  }
  destructive: {
    DEFAULT: string
    foreground: string
  }
  border: string
  input: string
  chart: {
    '1': string
    '2': string
    '3': string
    '4': string
    '5': string
  }
  on: {
    background: string
    error: {
      DEFAULT: string
      container: string
    }
    primary: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
      fixed: {
        DEFAULT: string
        variant: string
      }
    }
    secondary: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
      fixed: {
        DEFAULT: string
        variant: string
      }
    }
    tertiary: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
      fixed: {
        DEFAULT: string
        variant: string
      }
    }
    success: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
    }
    info: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
    }
    warning: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
    }
    danger: {
      DEFAULT: string
      accent: string
      card: string
      container: string
      muted: string
      popover: string
      secondary: string
      vibrant: string
    }
    surface: {
      DEFAULT: string
      variant: string
    }
  }
}

export type ColorName = ColorPaths<Colors>;