import express, { Request } from 'express'
import { SubmitFeedbackUseCase } from './use-cases/submitFeedbackUseCase';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerAdapter'
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbacksRepository';

export const routes = express.Router()

routes.post('/feedbacks', async (req: Request, res) => {

  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})