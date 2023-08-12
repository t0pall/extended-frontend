import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
