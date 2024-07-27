export const $Body_upload_files_uploadfiles_post = {
  properties: {
    files: {
      type: 'array',
      contains: {
        type: 'binary',
        format: 'binary',
      },
      isRequired: true,
    },
  },
} as const;

export const $HTTPValidationError = {
  properties: {
    detail: {
      type: 'array',
      contains: {
        type: 'ValidationError',
      },
    },
  },
} as const;

export const $UserRequestSchema = {
  properties: {
    username: {
      type: 'string',
      isRequired: true,
    },
    email: {
      type: 'string',
      isRequired: true,
    },
    password: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $UserResponseSchema = {
  properties: {
    id: {
      type: 'number',
      isRequired: true,
    },
    username: {
      type: 'string',
      isRequired: true,
    },
    email: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $ValidationError = {
  properties: {
    loc: {
      type: 'array',
      contains: {
        type: 'any-of',
        contains: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
      isRequired: true,
    },
    msg: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;
