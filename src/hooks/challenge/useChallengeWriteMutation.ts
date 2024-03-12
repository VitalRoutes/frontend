import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChallengeRegistrationRequest } from '@/types/challenge';

// //
// titleImage: File | null;
//   startingPositionImage: File | null;
//   destinationImage: File | null;
//   stopOverImage1: File | null;
//   stopOverImage2: File | null;
//   stopOverImage3: File | null;

export default function useChallengeWriteMutation() {
  const navigate = useNavigate();
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
    challengeWriter,
  }: ChallengeRegistrationRequest) => {
    const formData = new FormData();
    formData.append('titleImage', titleImage);
    formData.append('startingPositionImage', startingPositionImage);
    formData.append('destinationImage', destinationImage);
    formData.append('stopOverImage1', stopOverImage1);
    formData.append('stopOverImage2', stopOverImage2);
    formData.append('stopOverImage3', stopOverImage3);

    formData.append('challengeContents', challengeContents);
    formData.append('challengeTransportation', challengeTransportation);
    formData.append('challengeWriter', challengeWriter);
    formData.append('challengeTitle', challengeTitle);

    axios.postForm('/board/save', formData);
  };

  const onSuccess = () => {
    navigate('/challenge');
  };

  return useMutation({ mutationFn, onSuccess });
}
