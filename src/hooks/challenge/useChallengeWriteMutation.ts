import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChallengeRegistrationRequest } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';

export default function useChallengeWriteMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutationFn = async ({
    titleImage,
    startingPositionImage,
    destinationImage,
    stopOverImage1,
    stopOverImage2,
    stopOverImage3,
    challengeContents,
    challengeTitle,
    challengeTransportation,
    tags,
  }: ChallengeRegistrationRequest) => {
    const formData = new FormData();
    formData.append('titleImage', titleImage);
    formData.append('startingPositionImage', startingPositionImage);
    formData.append('destinationImage', destinationImage);
    if (stopOverImage1) formData.append('stopOverImage1', stopOverImage1);
    if (stopOverImage2) formData.append('stopOverImage2', stopOverImage2);
    if (stopOverImage3) formData.append('stopOverImage3', stopOverImage3);
    if (tags) formData.append('tags', `[${tags.toString()}]`);

    formData.append('challengeContents', challengeContents);
    formData.append('challengeTransportation', challengeTransportation);
    formData.append('challengeTitle', challengeTitle);

    const res = await axios.postForm('/board/save', formData);
    return res;
  };

  const onSuccess = () => {
    navigate('/challenge');
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.challengeList] });
  };

  return useMutation({ mutationFn, onSuccess });
}
