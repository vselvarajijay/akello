from abc import ABC, abstractmethod
from typing import Optional, List

from _old._old_user import User


class UserQueryService(ABC):

    @abstractmethod
    def get(self, user_id: str) -> Optional[User]:
        ...

    @abstractmethod
    def set(self, user: User) -> None:
        ...

    @abstractmethod
    def create(self, user: User) -> None:
        ...

    @abstractmethod
    def get_organization(self, user_id: str, organization_id: Optional[str]) -> List[str]:
        ...

    @abstractmethod
    def add_organization(self, user_id: str, organization_id: str) -> None:
        ...