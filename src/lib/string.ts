export function isUrl(url: string): boolean {
  return (
    url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
    ) !== null
  );
}

export const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  /* eslint-disable */
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
    /* eslint-enable */
});

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const unitPrices: { value: number, text: any }[] = [
  {
    value: 15,
    text: '15 tokens'
  },
  {
    value: 20,
    text: '20 tokens'
  },
  {
    value: 25,
    text: '25 tokens'
  },
  {
    value: 30,
    text: '30 tokens'
  },
  {
    value: 35,
    text: '35 tokens'
  },
  {
    value: 40,
    text: '40 tokens'
  },
  {
    value: 45,
    text: '45 tokens'
  },
  {
    value: 50,
    text: '50 tokens'
  }
  // {
  //   value: 55,
  //   text: '55 tokens'
  // },
  // {
  //   value: 60,
  //   text: '60 tokens'
  // },
  // {
  //   value: 65,
  //   text: '65 tokens'
  // },
  // {
  //   value: 70,
  //   text: '70 tokens'
  // },
  // {
  //   value: 75,
  //   text: '75 tokens'
  // },
  // {
  //   value: 80,
  //   text: '80 tokens'
  // },
  // {
  //   value: 85,
  //   text: '85 tokens'
  // },
  // {
  //   value: 90,
  //   text: '90 tokens'
  // },
  // {
  //   value: 95,
  //   text: '95 tokens'
  // },
  // {
  //   value: 100,
  //   text: '100 tokens'
  // },
  // {
  //   value: 120,
  //   text: '120 tokens'
  // },
  // {
  //   value: 140,
  //   text: '140 tokens'
  // },
  // {
  //   value: 160,
  //   text: '160 tokens'
  // },
  // {
  //   value: 180,
  //   text: '180 tokens'
  // },
  // {
  //   value: 200,
  //   text: '200 tokens'
  // },
  // {
  //   value: 220,
  //   text: '220 tokens'
  // },
  // {
  //   value: 240,
  //   text: '240 tokens'
  // },
  // {
  //   value: 260,
  //   text: '260 tokens'
  // },
  // {
  //   value: 280,
  //   text: '280 tokens'
  // },
  // {
  //   value: 300,
  //   text: '300 tokens'
  // },
  // {
  //   value: 320,
  //   text: '320 tokens'
  // },
  // {
  //   value: 340,
  //   text: '340 tokens'
  // },
  // {
  //   value: 360,
  //   text: '360 tokens'
  // },
  // {
  //   value: 380,
  //   text: '380 tokens'
  // },
  // {
  //   value: 400,
  //   text: '400 tokens'
  // },
  // {
  //   value: 420,
  //   text: '420 tokens'
  // },
  // {
  //   value: 440,
  //   text: '440 tokens'
  // },
  // {
  //   value: 460,
  //   text: '460 tokens'
  // },
  // {
  //   value: 480,
  //   text: '480 tokens'
  // },
  // {
  //   value: 500,
  //   text: '500 tokens'
  // },
  // {
  //   value: 550,
  //   text: '550 tokens'
  // },
  // {
  //   value: 600,
  //   text: '600 tokens'
  // },
  // {
  //   value: 650,
  //   text: '650 tokens'
  // },
  // {
  //   value: 700,
  //   text: '700 tokens'
  // },
  // {
  //   value: 750,
  //   text: '750 tokens'
  // },
  // {
  //   value: 800,
  //   text: '800 tokens'
  // },
  // {
  //   value: 850,
  //   text: '850 tokens'
  // },
  // {
  //   value: 900,
  //   text: '900 tokens'
  // },
  // {
  //   value: 950,
  //   text: '950 tokens'
  // },
  // {
  //   value: 1000,
  //   text: '1000 tokens'
  // }
];
