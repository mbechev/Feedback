import { FeedbackDTO } from './../models/user/feedback.dto';
import { FeedbacksController } from '../feedbacks/feedbacks.controller';
import { FeedbackService } from '../feedbacks/feedbacks.service';

jest.mock('./../feedbacks/feedbacks.service');
jest.mock('../feedbacks/feedbacks.controller');

describe('Feedbacks Controller', () => {
    let feedbackServ: FeedbackService;
    let feedbackCtrl: FeedbacksController;

    beforeEach(() => {
        feedbackServ = new FeedbackService(null);
        feedbackCtrl = new FeedbacksController(feedbackServ);
    });

    it('should call findFeedbacks method', async () => {
        // Arrange
        jest.spyOn(feedbackCtrl, 'findFeedbacks').mockImplementation(() => {
            return 'test';
        });

        // Act
        await feedbackCtrl.findFeedbacks(null);

        // Assert
        expect(feedbackCtrl.findFeedbacks).toBeCalledTimes(1);
    });

    it('should call addFeedback method', async () => {
        // Arrange
        jest.spyOn(feedbackCtrl, 'addFeedback').mockImplementation(() => {
            return 'test';
        });
        const feedback: FeedbackDTO = new FeedbackDTO();

        // Act
        await feedbackCtrl.addFeedback(feedback, null);

        // Assert
        expect(feedbackCtrl.addFeedback).toBeCalledTimes(1);
    });
});
