interface IgenMsgOptions<T extends any> {
  status?: number;
  data?: T;
  msg?: string;
}

interface IgenMsgResult<T> {
  status?: number;
  data: T;
  msg?: string;
}

const getMsg = <T>(options: IgenMsgOptions<T> = { status: 1, msg: '' }): IgenMsgResult<T> => {
  if (options.status === -1) {
    options.msg = options.msg || 'UNKNOWN ERROR';
  }
  const result = Object.assign({ data: {} }, options);
  return result;
};

export default getMsg;
