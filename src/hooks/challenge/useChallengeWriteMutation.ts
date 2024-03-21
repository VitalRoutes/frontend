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
    startingPosLat,
    startingPosLon,
    destinationLat,
    destinationLon,
    stopOver1Lat,
    stopOver1Lon,
    stopOver2Lat,
    stopOver2Lon,
    stopOver3Lat,
    stopOver3Lon,
  }: ChallengeRegistrationRequest) => {
    const formData = new FormData();
    formData.append('titleImage', titleImage);
    formData.append('startingPositionImage', startingPositionImage);
    formData.append('startingPosLat', String(startingPosLat));
    formData.append('startingPosLon', String(startingPosLon));

    formData.append('destinationImage', destinationImage);
    formData.append('destinationLat', String(destinationLat));
    formData.append('destinationLon', String(destinationLon));

    if (stopOverImage1) formData.append('stopOverImage1', stopOverImage1);
    if (stopOver1Lat) formData.append('stopOver1Lat', String(stopOver1Lat));
    if (stopOver1Lon) formData.append('stopOver1Lon', String(stopOver1Lon));

    if (stopOverImage2) formData.append('stopOverImage2', stopOverImage2);
    if (stopOver2Lat) formData.append('stopOver2Lat', String(stopOver2Lat));
    if (stopOver2Lon) formData.append('stopOver2Lon', String(stopOver2Lon));

    if (stopOverImage3) formData.append('stopOverImage3', stopOverImage3);
    if (stopOver3Lat) formData.append('stopOver3Lat', String(stopOver3Lat));
    if (stopOver3Lon) formData.append('stopOver3Lon', String(stopOver3Lon));
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
