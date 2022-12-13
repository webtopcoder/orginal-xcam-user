import { getGlobalConfig } from '@services/config';
import { message } from 'antd';
import { RcFile } from 'antd/lib/upload';

export function beforeAvatarUpload(file: RcFile): boolean {
  const ext = file.name.split('.').pop().toLowerCase();
  const config = getGlobalConfig();
  const isImageAccept = config.NEXT_PUBLIC_IMAGE_ACCPET
    .split(',')
    .map((item: string) => item.trim())
    .indexOf(`.${ext}`);
  if (isImageAccept === -1) {
    message.error(`You can only upload ${config.NEXT_PUBLIC_IMAGE_ACCPET} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < (config.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2);
  if (!isLt2M) {
    message.error(
      `Image must smaller than ${config.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2}MB!`
    );
    return false;
  }

  return true;
}
