// createQuiz(Quiz : quizInput) : Quiz
import { gql } from '@apollo/client';
export const CREATE_QUIZ = gql`
    mutation createQuizMutation($Quiz: quizInput){
        createQuiz(Quiz: $Quiz){
            id 
            createdBy
            title
            description
            questions {
                id
                quizId
                description
                options
                correctOption
            }
            isVisible
            isApproved
            startTime
            endTime
            QuizAttendees {
                id
                quizId
                userId
                score
            }
        }
    }
`;

export const GET_ALL_QUIZ = gql`
    mutation getAllQuizMutation{
        getAllQuiz{
            id 
            createdBy
            title
            description
            isVisible
            isApproved
            startTime
            endTime
        }
    }

`;

export const GET_QUIZ_BY_ID_without_Q = gql`
    mutation getQuizByIdMutation($QuizId: Int!){
        getQuizById(QuizId: $QuizId){
            id 
            createdBy
            title
            description
            isVisible
            isApproved
            startTime
            endTime
        }
    }

`;

export const GET_QUIZ_BY_ID_with_Q = gql`
    mutation getQuizByIdMutation($QuizId: Int!){
        getQuizById(QuizId: $QuizId){
            id 
            title
            questions {
                id
                quizId
                description
                options
                correctOption
            }
            isVisible
            isApproved
            startTime
            endTime
        }
    }

`;

export const UPDATE_QUIZ = gql`
    mutation updateQuizMutation($quizId: Int!, $Quiz: quizInput){
        updateQuiz(quizId: $quizId, Quiz: $Quiz){
            id 
        }
    }
`;

export const DELETE_QUIZ = gql`
    mutation deleteQuizMutation($QuizId:Int!){
        deleteQuiz(QuizId:$QuizId)
    }
`;

export const ADD_QUESTION_TO_QUIZ = gql`
    mutation addQuestionToQuizMutation($question: addQuestion){
        addQuestionToQuiz(question: $question){
            id 
            quizId
            description
            options
            correctOption
        }
    }
`;
