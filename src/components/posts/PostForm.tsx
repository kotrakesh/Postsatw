import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'
import { Post } from '../../models/post'
import { Button, InputField } from '../atoms'

interface PostFormProps {
    post?: Post | null //for edit optional
    onSubmit: (data: Post) => void
    resetFlag?: boolean
    setResetFlag?: (flag: boolean) => void
}

const PostForm: React.FC<PostFormProps> = ({
    post,
    onSubmit,
    resetFlag = false,
    setResetFlag,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Post>({ defaultValues: post || {} })

    const handleFormSubmit = (data: Post) => {
        onSubmit(data)
    }

    useEffect(() => {
        resetFlag && reset()
        !!setResetFlag && setResetFlag(false)
    }, [resetFlag, reset, setResetFlag])
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                >
                    <form
                        key={`formce_${post?.id}`}
                        onSubmit={handleSubmit(handleFormSubmit)}
                    >
                        <div>
                            <InputField
                                error={!!errors?.title}
                                label="Title*"
                                fieldName="title"
                                helperText={errors?.title?.message}
                                params={register('title', {
                                    required: 'Titlle is Required',
                                    maxLength: 35,
                                })}
                            />
                        </div>

                        <div>
                            <InputField
                                multiline={true}
                                rows={4}
                                error={!!errors?.content}
                                label="Content*"
                                fieldName="content"
                                helperText={errors?.content?.message}
                                params={register('content', {
                                    required: 'Content  is Required',
                                    maxLength: 350,
                                })}
                            />
                        </div>
                        <div>
                            <InputField
                                label="Image url"
                                error={!!errors?.image_url}
                                fieldName="image_url"
                                helperText={
                                    !!errors?.image_url
                                        ? 'Enter valid url'
                                        : undefined
                                }
                                params={register('image_url', {
                                    pattern:
                                        /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi,
                                })}
                            />
                        </div>
                        <div>
                            <InputField
                                type="number"
                                error={!!errors?.lat}
                                label="latitude"
                                fieldName="lat"
                                helperText={
                                    !!errors?.lat
                                        ? 'Enter valid latitude'
                                        : undefined
                                }
                                params={register('lat', {
                                    min: -90,
                                    max: 90,
                                    valueAsNumber: true,
                                })}
                            />

                            <InputField
                                type="number"
                                error={!!errors?.long}
                                label="longitude"
                                fieldName="long"
                                helperText={
                                    !!errors?.long
                                        ? 'Enter valid longitude'
                                        : undefined
                                }
                                params={register('long', {
                                    min: -180,
                                    max: 180,
                                    valueAsNumber: true,
                                })}
                            />
                        </div>

                        <Button
                            onClick={handleSubmit(handleFormSubmit)}
                            variant="contained"
                        >
                            {post ? 'Update' : 'Add'}
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default PostForm
