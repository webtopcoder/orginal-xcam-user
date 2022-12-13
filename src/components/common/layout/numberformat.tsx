import { NumberFormatProps } from 'react-number-format';
import dynamic from 'next/dynamic';

const NumberFormatNoSSR = dynamic(() => import('react-number-format'), {
  ssr: false
});
interface P extends NumberFormatProps {}
export default function NumberFormat({ decimalScale, ...props }: P) {
  return (
    <NumberFormatNoSSR
      {...props}
      displayType="text"
      decimalScale={decimalScale || 2}
      decimalSeparator="."
      thousandSeparator=","
    />
  );
}
