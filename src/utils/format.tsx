  
import numeral from 'numeral';
import 'numeral/locales/';
numeral.locale('pt-pt');

export const formatPrice = (num: number) => numeral(num).format('$ 0,0.00');