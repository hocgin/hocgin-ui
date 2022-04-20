import { useGet, usePost } from '@/index';
import Dom from '@/Utils/dom';
import { ID, ScrollRo } from '@/Utils/interface';
import {
  DraftDoc,
  HistoryDocContent,
  PublishedDoc,
} from '@/Promise/components/Editor/types';

export default class {
  static getPublishedDoc(id: ID): Promise<PublishedDoc> {
    return useGet(`/api/rcm/doc/${id}`)
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }

  static getDraftedDoc(id: ID): Promise<DraftDoc> {
    return useGet(`/api/rcm/doc/${id}/content`)
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }

  static draft(id: ID, payload: { doctype: string; content: string }) {
    return usePost(`/api/rcm/doc/${id}/content`, {
      data: { ...payload },
    })
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }

  static publish(id: ID) {
    return usePost(`/api/rcm/doc/${id}/publish`)
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }

  static history(id: ID, payload: ScrollRo): Promise<HistoryDocContent[]> {
    return usePost(`/api/rcm/doc/${id}/history`, {
      data: { ...payload },
    })
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }

  static rollback(id: ID, payload: { docContentId: ID }) {
    return usePost(`/api/rcm/doc/${id}/rollback`, {
      data: { ...payload },
    })
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }

  static createVersion(contentId: ID, payload: { title: string }) {
    return usePost(`/api/rcm/doc/version/${contentId}/name`, {
      data: { ...payload },
    })
      .then(Dom.tryErrorIfExits)
      .then(Dom.thenData)
      .catch(Dom.showErrorMessage);
  }
}
