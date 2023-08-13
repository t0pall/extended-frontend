import ProfileCard from './ui/ProfileCard/ProfileCard';

export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export {
  Profile,
  ProfileSchema,
} from './model/types/Profile';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { ProfileCard };
